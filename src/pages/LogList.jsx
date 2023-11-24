import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { Stack, TextField } from "@mui/material";
import dataList from "../datalogs"

const LogList = () => {
    const logs = dataList;
    const [searchDocNumber, setsearchDocNumber] = useState("")
    const [isValidDocNumber, setIsValidDocNumber] = useState(true)
    const filteredRows = logs.filter((log) => {
      return (
        log.docnumber.includes(searchDocNumber)
      );
    });

    const handleDocNumberChange = (e) => {
        const newDocnumber = e.target.value;
        setsearchDocNumber(newDocnumber);
        setIsValidDocNumber(/^\d+$/.test(newDocnumber) && newDocnumber.length <= 10);
    }
    
    return (
      <Container sx={{ paddingTop: 5 }}>
        <Stack direction="row" spacing={2} sx={{ marginBottom: 2 }}>
          <TextField
            label="Buscar por tipo de documento"
            variant="outlined"
            value={""}
          />
          <TextField
            label="Buscar por número de documento"
            variant="outlined"
            error={isValidDocNumber === false}
            value={searchDocNumber}
            helperText={isValidDocNumber ? "Ingresa el número de documento" : "Solo números y no mayor a 10 caracteres"}
            onChange={handleDocNumberChange}
            sx = {{"& .MuiFormHelperText-root": { color: "grey" }}}
          />
          <TextField
            label="Buscar por fecha"
            variant="outlined"
            value={""}
          />
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{background: "#EBEBEB"}}>
              <TableRow>
                <TableCell align="center">Tipo de Documento</TableCell>
                <TableCell align="center">Documento</TableCell>
                <TableCell align="center">Acción</TableCell>
                <TableCell align="center">Fecha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows.map((row) => (
                <TableRow
                  key={row.doc}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{row.doctype}</TableCell>
                  <TableCell align="center">{row.docnumber}</TableCell>
                  <TableCell align="center">{row.action}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  };
  
  export default LogList;
  