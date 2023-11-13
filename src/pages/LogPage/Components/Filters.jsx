import React from "react";
import { Box} from "@mui/material";
import IdFilter from "../../../components/IdFilter";
import IdTextfield from "./IdTextfield";
import DateFilter from "./DateFilter";
import SearchButton from "./SearchButton";

const FiltersView = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', padding: '8px', borderRadius: '4px' }}>
      {/* Dropdown para seleccionar tipos de identificación */}
      <IdFilter></IdFilter>
      
      {/* Campo de texto para el número de identificación */}
      <IdTextfield></IdTextfield>

      {/* Selector de fecha */}
      <DateFilter/>

      {/* Botón de búsqueda */}
      <SearchButton/>
    </Box>
  );
};

export default FiltersView;