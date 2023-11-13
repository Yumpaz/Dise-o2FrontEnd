import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const MyTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: '#F3F2F1' }}>
          <TableRow>
            <TableCell>Tipo de documento</TableCell>
            <TableCell align="left">Documento</TableCell>
            <TableCell align="left">Acción</TableCell>
            <TableCell align="left">Fecha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(4)].map((_, index) => (
            <TableRow
              key={index}
              sx={{ '&:nth-of-type(odd)': { backgroundColor: '#FAF9F8' } }}
            >
              <TableCell component="th" scope="row">
                1234567891
              </TableCell>
              <TableCell align="left">TI</TableCell>
              <TableCell align="left">Crear</TableCell>
              <TableCell align="left">2/11/2023</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
