import React, { useState } from "react";
import { Select, MenuItem } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function IdFilter() {
  // Estado inicial para el valor seleccionado
  const [selectedValue, setSelectedValue] = useState("");

  // Función para manejar el cambio de selección
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <Select
      displayEmpty
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedValue} // Vinculando el estado al valor del Select
      label="ID Type"
      sx={{ margin: "0 8px", bgcolor: "white" ,borderRadius:"18px",border:"none"}}
      onChange={handleChange} // Asignando la función para manejar los cambios
    >
      <MenuItem value="" disabled>
        Selecciona un Tipo de ID
      </MenuItem>
      <MenuItem value="ID">TARJETA DE IDENTIFICACIÓN</MenuItem>
      <MenuItem value="CC">CEDULA DE CIUDADANIA</MenuItem>
    </Select>
  );
}

export default IdFilter;
