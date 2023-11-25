import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Container from "@mui/material/Container";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import dataList from "../datalogs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const LogList = () => {
  const logs = dataList;
  const [DocType, setDocType] = useState("");
  const [searchDocNumber, setsearchDocNumber] = useState("");
  const [isValidDocNumber, setIsValidDocNumber] = useState(true);
  const [Datei, setDatei] = useState("1900-01-01");
  const [Datef, setDatef] = useState("9999-12-31");
  const filteredRows = logs.filter((log) => {
    let Dateidespues = true;
    let Datefantes = true;
    const [day, month , year] = log.date.split("/");
    const Dateicheck = dayjs(Datei)
    const Datefcheck = dayjs(Datef)
    const [monthi, dayi, yeari,] = [(Dateicheck.$M)+1, Dateicheck.$D, Dateicheck.$y]
    const [monthf, dayf, yearf,] = [(Datefcheck.$M)+1, Datefcheck.$D, Datefcheck.$y]
    if(yeari > year){
        Dateidespues = false
    }else{
        if(monthi > month){
            Dateidespues = false
        }else{
            if(dayi > day){
                Dateidespues = false
            }else{
                Dateidespues = true
            }
        }
    }
    if(yearf < year){
        Datefantes = false
    }else{
        if(monthf < month){
            Datefantes = false
        }else{
            if(dayf < day){
                Datefantes = false
            }else{
                Datefantes = true
            }
        }
    }
    console.log("Dateidespues: "+Dateidespues+" Dateiantes: "+Datefantes)
    return (
      log.docnumber.includes(searchDocNumber) && log.doctype.includes(DocType) && Dateidespues === true && Datefantes === true
    );
  });

  const handleDelete = () => {};

  const handleDocNumberChange = (e) => {
    const newDocnumber = e.target.value;
    setsearchDocNumber(newDocnumber);
    setIsValidDocNumber(
      /^\d+$/.test(newDocnumber) && newDocnumber.length <= 10
    );
  };

  const handleDocTypeChange = (e) => {
    setDocType(e.target.value);
  };

  const handleDateiChange = (newValue) => {
    const newDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
    setDatei(newDate);
  };

  const handleDatefChange = (newValue) => {
    const newDate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
    setDatef(newDate);
  };

  const handleDocType = (doctype) => {
    if (doctype === "cedula") {
      return "Cédula";
    } else {
      if (doctype === "ti") {
        return "Tarjeta de identidad";
      }
    }
  };

  return (
    <Container sx={{ paddingTop: 5 }}>
      <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
        <Typography sx={{ color: "gray", paddingTop: 2 }}>Filtros: </Typography>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel>Tipo de documento</InputLabel>
          <Select
            value={DocType}
            label="Tipo de Documento"
            onChange={handleDocTypeChange}
          >
            <MenuItem value={"ti"}>Tarjeta de Identidad</MenuItem>
            <MenuItem value={"cedula"}>Cédula</MenuItem>
            <MenuItem value={""}>Todo</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Número de documento"
          variant="outlined"
          error={isValidDocNumber === false}
          value={searchDocNumber}
          helperText={
            isValidDocNumber
              ? "Ingresa el número de documento"
              : "Solo números y no mayor a 10 caracteres"
          }
          onChange={handleDocNumberChange}
        />
        <Typography sx={{ color: "gray", paddingTop: 2 }}>Desde:</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            format="DD/MM/YYYY"
            value={dayjs(Datei)}
            onChange={(newValue) => handleDateiChange(newValue)}
          />
        </LocalizationProvider>
        <Typography sx={{ color: "gray", paddingTop: 2 }}>Hasta</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            format="DD/MM/YYYY"
            value={dayjs(Datef)}
            onChange={(newValue) => handleDatefChange(newValue)}
          />
        </LocalizationProvider>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ background: "#EBEBEB" }}>
            <TableRow>
              <TableCell align="center">Tipo de Documento</TableCell>
              <TableCell align="center">Documento</TableCell>
              <TableCell align="center">Acción</TableCell>
              <TableCell align="center">Fecha</TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow
                key={row.doc}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {handleDocType(row.doctype)}
                </TableCell>
                <TableCell align="center">{row.docnumber}</TableCell>
                <TableCell align="center">{row.action}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">
                  {
                    <IconButton onClick={handleDelete}>
                      <DeleteForeverIcon
                        sx={{ width: "30px", height: "30px", color: "red" }}
                      />
                    </IconButton>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default LogList;
