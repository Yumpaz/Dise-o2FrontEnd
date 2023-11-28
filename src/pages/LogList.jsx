import React, { useState, useEffect } from "react";
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
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const LogList = () => {
  const [logs, setDatos] = useState(null);
  const [DocType, setDocType] = useState("");
  const [searchDocNumber, setsearchDocNumber] = useState("");
  const [isValidDocNumber, setIsValidDocNumber] = useState(true);
  const [Datei, setDatei] = useState("");
  const [Datef, setDatef] = useState("");
  const deleteLogs = async (logId) => {
    try {
      const response = await fetch(
        `http://172.203.155.199:8000/log/${logId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Error al eliminar el usuario");
      }

      const data = await response.json();
      console.log("Log eliminado", data);
    } catch (error) {
      console.error("Hubo un error al eliminar el usuario:", error);
    }
    getLogs();
  };

  const getLogs = async () => {
    try {
      const respuesta = await fetch("http://172.203.155.199:8000/log");
      if (!respuesta.ok) {
        throw new Error("Error en la respuesta de la red");
      }
      const data = await respuesta.json();
      setDatos(data);
    } catch (error) {
      console.error("error:", error);
    }
  };

  useEffect(() => {
    getLogs();
  }, []);

  const filteredRows =
    logs?.filter((log) => {
      let Dateidespues = true;
      let Datefantes = true;

      const parsedFecha = dayjs(log.created_at);
      const [month, day, year] = [
        parsedFecha.$M + 1,
        parsedFecha.$D,
        parsedFecha.$y,
      ];
      if (Datei !== "") {
        const Dateicheck = dayjs(Datei);
        const [monthi, dayi, yeari] = [
          Dateicheck.$M + 1,
          Dateicheck.$D,
          Dateicheck.$y,
        ];
        if (yeari > year) {
          Dateidespues = false;
        } else {
          if (monthi > month && yeari === year) {
            Dateidespues = false;
          } else {
            if (dayi > day && monthi === month && yeari === year) {
              Dateidespues = false;
            } else {
              Dateidespues = true;
            }
          }
        }
      }
      if (Datef !== "") {
        const Datefcheck = dayjs(Datef);
        const [monthf, dayf, yearf] = [
          Datefcheck.$M + 1,
          Datefcheck.$D,
          Datefcheck.$y,
        ];
        if (yearf < year) {
          Datefantes = false;
        } else {
          if (monthf < month && yearf === year) {
            Datefantes = false;
          } else {
            if (dayf < day && monthf === month && yearf === year) {
              Datefantes = false;
            } else {
              Datefantes = true;
            }
          }
        }
      }
      return (
        log.document_id.includes(searchDocNumber) &&
        log.document_type.includes(DocType) &&
        Dateidespues === true &&
        Datefantes === true
      );
    }) ?? [];

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
    if (doctype === "Cédula") {
      return "Cédula";
    } else {
      if (doctype === "Tarjeta de identidad") {
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
            <MenuItem value={"Tarjeta de identidad"}>
              Tarjeta de Identidad
            </MenuItem>
            <MenuItem value={"Cédula"}>Cédula</MenuItem>
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
                key={row.log_id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">
                  {handleDocType(row.document_type)}
                </TableCell>
                <TableCell align="center">{row.document_id}</TableCell>
                <TableCell align="center">{row.operation}</TableCell>
                <TableCell align="center">
                  {dayjs(row.created_at).format("DD-MM-YYYY")}
                </TableCell>
                <TableCell align="center">
                  {
                    <IconButton onClick={()=>deleteLogs(row.log_id)}>
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
