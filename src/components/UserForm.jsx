import React, { useState } from "react";
import "./style.css";
import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Typography,
} from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const UserForm = ({ onClose, isnew, name, lastname, doctype, docnumber, gender, email, birthdate, phone }) => {
  const [value, setValue] = useState(null);
  const [doctypevalue, setdoctypevalue] = useState(doctype)
  const [gendervalue, setgendervalue] = useState(gender)

  return (
    <Box
      sx={{
        height: "80vh",
        width: "80vh",
        background: "#01214F",
      }}
    >
      <Stack direction="column">
        <Button
          onClick={onClose}
          variant="outlined"
          startIcon={
            <CloseIcon
              sx={{
                width: "30px",
                height: "30px",
                color: "black",
                marginLeft: "7px",
              }}
            />
          }
          sx={{
            background: "#FF595A",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderradius: "8px",
            alignSelf: "end",
            margin: "10px",
            "&:hover .MuiSvgIcon-root": {
              color: "white",
            },
          }}
        ></Button>
        <Stack direction="row" sx={{ alignSelf: "center" }}>
          <Avatar
            src="/images/avatar"
            sx={{
              marginLeft: "40px",
              boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
              "--Avatar-size": "8rem",
            }}
          />
          <IconButton>
            <EditIcon
              sx={{
                width: "25px",
                height: "25px",
                color: "white",
                marginTop: "80px",
              }}
            />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          sx={{ marginTop: "30px", justifyContent: "space-evenly" }}
        >
          <Stack direction="column" spacing={2}>
            <TextField
              onChange={(newValue) => setdoctypevalue(newValue)}
              label="Nombres"
              value={name}
              variant="filled"
              helperText="Ingresa tu nombre"
              sx={{
                outline:"",
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <FormControl>
              <FormLabel
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                Tipo de documento
              </FormLabel>
              <RadioGroup row value={doctypevalue} onChange={(newValue) => setdoctypevalue(newValue)}>
                <FormControlLabel
                  value="cedula"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Cédula"
                  sx={{ "& .MuiTypography-root": { color: "white" } }}
                />
                <FormControlLabel
                  value="ti"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Tarjeta de identidad"
                  sx={{ "& .MuiTypography-root": { color: "white" } }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                Género
              </FormLabel>
              <RadioGroup row value={gendervalue} onChange={(newValue) => setgendervalue(newValue)}>
                <Stack direction="column">
                  <FormControlLabel
                    value="female"
                    control={<Radio sx={{ color: "white" }} />}
                    label="Femenino"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio sx={{ color: "white" }} />}
                    label="Masculino"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                </Stack>
                <Stack direction="column">
                  <FormControlLabel
                    value="nobin"
                    control={<Radio sx={{ color: "white" }} />}
                    label="No binario"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                  <FormControlLabel
                    value="nodef"
                    control={<Radio sx={{ color: "white" }} />}
                    label="No especificar"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={value}
                onChange={(newValue) => setValue(newValue)}
                sx={{
                  '& .MuiInputBase-input': {
                    color: 'white',
                  },
                  "& .MuiInputLabel-root": {
                    color: "white"
                  },
                  '& .MuiSvgIcon-root': {
                    color: 'white'
                  },
                }}
              />
            </LocalizationProvider>
          </Stack>
          <Stack direction="column" spacing={2}>
            <TextField
              label="Apellidos"
              value={lastname}
              variant="filled"
              helperText="Ingresa tu apellido"
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Número de documento"
              value={docnumber}
              variant="filled"
              helperText="Ingresa tu número de documento"
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Email"
              value={email}
              variant="filled"
              helperText="Ingresa tu email"
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Célular"
              value={phone}
              variant="filled"
              helperText="Ingresa tu número de celular"
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          startIcon={
            <CheckIcon sx={{ width: "30px", height: "30px", color: "black" }} />
          }
          sx={{
            display: "flex",
            alignSelf: "center",
            flexdirection: "row",
            justifycontent: "center",
            alignitems: "center",
            gap: "6px",
            marginTop: "30px",
            position: "relative",
            width: "206px",
            height: "60px",
            background: "#FF595A",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderradius: "8px",
            "&:hover .MuiTypography-root": {
              color: "white",
            },
            "&:hover .MuiSvgIcon-root": {
              color: "white",
            },
          }}
          onClick={onClose}
        >
          {isnew ? (<Typography sx={{ fontWeight: "bold", color: "black" }}>
            Crear
          </Typography>) : (<Typography sx={{ fontWeight: "bold", color: "black" }}>
            Actualizar
          </Typography>)}
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
