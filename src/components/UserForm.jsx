import React from "react";
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

const UserForm = ({ onClose }) => {
  return (
    <Box
      sx={{
        height: "80vh",
        width: "80vh",
        background: "#001233",
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
          sx={{ marginTop: "20px", justifyContent: "space-evenly" }}
        >
          <Stack direction="column" spacing={2}>
            <TextField
              label="Nombre"
              variant="filled"
              helperText="Ingresa tu nombre"
              sx={{
                "& label": { color: "grey" },
                "& input": { color: "white" },
                "& .MuiFilledInput-root": { background: "#000E26" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <FormControl>
              <FormLabel sx={{ color: "white" }}>Tipo de documento</FormLabel>
              <RadioGroup row>
                <FormControlLabel
                  value="cedula"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Cédula"
                  sx={{ "& .MuiTypography-root": { color: "white" } }}
                />
                <FormControlLabel
                  value="tarjetaidentidad"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Tarjeta de identidad"
                  sx={{ "& .MuiTypography-root": { color: "white" } }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel sx={{ color: "white" }}>Género</FormLabel>
              <RadioGroup row>
                <Stack direction="column">
                  <FormControlLabel
                    value="fem"
                    control={<Radio sx={{ color: "white" }} />}
                    label="Femenino"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                  <FormControlLabel
                    value="masc"
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
                    value="undefined"
                    control={<Radio sx={{ color: "white" }} />}
                    label="No especificar"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack direction="column" spacing={2}>
            <TextField
              label="Apellido"
              variant="filled"
              helperText="Ingresa tu apellido"
              sx={{
                "& label": { color: "grey" },
                "& input": { color: "white" },
                "& .MuiFilledInput-root": { background: "#000E26" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Nro Documento"
              variant="filled"
              helperText="Ingresa tu número de documento"
              sx={{
                "& label": { color: "grey" },
                "& input": { color: "white" },
                "& .MuiFilledInput-root": { background: "#000E26" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Email"
              variant="filled"
              helperText="Ingresa tu email"
              sx={{
                "& label": { color: "grey" },
                "& input": { color: "white" },
                "& .MuiFilledInput-root": { background: "white" },
                //000E26
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
            <TextField
              label="Célular"
              variant="filled"
              helperText="Ingresa tu número de celular"
              sx={{
                "& label": { color: "grey" },
                "& input": { color: "white" },
                "& .MuiFilledInput-root": { background: "#000E26" },
                "& .MuiFormHelperText-root": { color: "grey" },
              }}
            />
          </Stack>
        </Stack>
        <Button
            variant="outlined"
            startIcon={
              <CheckIcon
                sx={{ width: "30px", height: "30px", color: "black" }}
              />
            }
            sx={{
              display: "flex",
              alignSelf: "center",
              flexdirection: "row",
              justifycontent: "center",
              alignitems: "center",
              gap: "6px",
              marginTop: "20px",
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
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Confirmar
            </Typography>
          </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
