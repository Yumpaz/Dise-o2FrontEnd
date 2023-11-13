import React from "react";
import {TextField} from "@mui/material";


const DateFilter=()=>{
    return(<TextField
        id="date"
        type="date"
        defaultValue="2023-11-02"
        sx={{
          margin: "0 8px",
          bgcolor: "white",
          borderRadius: "18px",
          border: "none",
        }}
        InputLabelProps={{
          shrink: true,
        }}
        // onChange={handleDateChange} // Esto será para la funcionalidad
      />);
}


export default DateFilter