import React, { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

const IdTextField = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setValue(value);
    }
  };

  return (
    <TextField
      id="input-with-icon-textfield"
      placeholder="Numero de identidad"
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <PermIdentityIcon />
          </InputAdornment>
        ),
      }}
      variant="outlined"
      sx={{ margin: "0 8px", bgcolor: "white",borderRadius: '18px',border:"none" }}
    />
  );
};

export default IdTextField;
