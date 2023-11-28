import React, { useState } from "react";
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
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";

function getinitialdate(birthdate) {
  const [day, month, year] = birthdate.split("/");
  return `${year}-${month}-${day}`;
}

const UserForm = ({
  onClose,
  isnew,
  name,
  secondname,
  lastname,
  doctype,
  docnumber,
  gender,
  email,
  birthdate,
  phone,
  image,
}) => {
  const [birthdateValue, setBirthdateValue] = useState(
    birthdate ? getinitialdate(birthdate) : null
  );
  const [nameValue, setNameValue] = useState(name);
  const [secondnameValue, setsecondnameValue] = useState(secondname);
  const [isValidSecondname, setisValidSecondname] = useState(true);
  const [isValidName, setisValidName] = useState(true);
  const [lastnameValue, setLastnameValue] = useState(lastname);
  const [isValidLastname, setisValidLastname] = useState(true);
  const [doctypeValue, setDoctypeValue] = useState(doctype);
  const [docnumberValue, setDocnumberValue] = useState(docnumber);
  const [isValidDocnumber, setIsValidDocnumber] = useState(true);
  const [genderValue, setGenderValue] = useState(gender);
  const [emailValue, setEmailValue] = useState(email);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [phoneValue, setPhoneValue] = useState(phone);
  const [isValidPhone, setisValidPhone] = useState(true);
  const [alert, setAlert] = useState(false);
  const [imageValue, setImagen] = useState(image);

  //#region Validations
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmailValue(newEmail);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail));
  };
  const handleDocnumberChange = (e) => {
    const newDocnumber = e.target.value;
    setDocnumberValue(newDocnumber);
    setIsValidDocnumber(
      /^\d+$/.test(newDocnumber) && newDocnumber.length <= 10
    );
  };
  const handleNombreChange = (e) => {
    const newNombre = e.target.value;
    setNameValue(newNombre);
    setisValidName(
      /^[^\d]+$/.test(newNombre) &&
        newNombre.length <= 30 &&
        newNombre.trim() !== "" &&
        newNombre.trim() === newNombre
    );
  };
  const handleSegundoNombreChange = (e) => {
    const newSecond = e.target.value;
    setsecondnameValue(newSecond);
    setisValidSecondname(
      /^[^\d]+$/.test(newSecond) &&
        newSecond.length <= 30 &&
        newSecond.trim() !== "" &&
        newSecond.trim() === newSecond
    );
  };
  const handleApellidoChange = (e) => {
    const newApellido = e.target.value;
    setLastnameValue(newApellido);
    setisValidLastname(
      /^[^\d]+$/.test(newApellido) &&
        newApellido.length <= 60 &&
        newApellido.trim() !== ""
    );
  };
  const handlePhoneChange = (e) => {
    const newPhone = e.target.value;
    setPhoneValue(newPhone);
    setisValidPhone(/^\d+$/.test(newPhone) && newPhone.length === 10);
  };
  const handleBirthdateChange = (newValue) => {
    const newBirthdate = `${newValue.$y}-${newValue.$M + 1}-${newValue.$D}`;
    setBirthdateValue(newBirthdate);
  };
  const handleButtonPress = () => {
    // eslint-disable-next-line
    if (
      (nameValue,
      secondnameValue,
      lastnameValue,
      doctypeValue,
      docnumberValue,
      genderValue,
      emailValue,
      birthdateValue,
      phoneValue === "")
    ) {
      setAlert(true);
    } else {
      setAlert(false);
      if (isnew) {
        console.log("Crear");
        onClose();
      } else {
        console.log("Actualizar");
        onClose();
      }
    }
  };
  const manejarErrorImagen = () => {
    setImagen("/images/avatar");
  };
  //#endregion Validations

  return (
    <Box
      sx={{
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
            src={imageValue}
            onError={manejarErrorImagen}
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
          <Stack direction="column" spacing={1}>
            <TextField
              label="Primer Nombre"
              value={nameValue}
              error={isValidName === false}
              onChange={handleNombreChange}
              variant="filled"
              helperText={
                isValidName
                  ? "Ingresa tu nombre"
                  : "No usar números y no mayor a 30 caracteres"
              }
              sx={{
                outline: "",
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidName ? "grey" : "red",
                },
              }}
            />
            <TextField
              label="Segundo Nombre"
              value={secondnameValue}
              error={isValidSecondname === false}
              onChange={handleSegundoNombreChange}
              variant="filled"
              helperText={
                isValidSecondname
                  ? "Ingresa tu segundo nombre"
                  : "No usar números y no mayor a 30 caracteres"
              }
              sx={{
                outline: "",
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidSecondname ? "grey" : "red",
                },
              }}
            />
            <FormControl>
              <FormLabel
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                Tipo de documento
              </FormLabel>
              <RadioGroup
                row
                value={doctypeValue}
                onChange={(e) => setDoctypeValue(e.target.value)}
              >
                <FormControlLabel
                  value="Cédula"
                  control={<Radio sx={{ color: "white" }} />}
                  label="Cédula"
                  sx={{ "& .MuiTypography-root": { color: "white" } }}
                />
                <FormControlLabel
                  value="Tarjeta de identidad"
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
              <RadioGroup
                row
                value={genderValue}
                onChange={(e) => setGenderValue(e.target.value)}
              >
                <Stack direction="column">
                  <FormControlLabel
                    value="Femenino"
                    control={<Radio sx={{ color: "white" }} />}
                    label="Femenino"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                  <FormControlLabel
                    value="Masculino"
                    control={<Radio sx={{ color: "white" }} />}
                    label="Masculino"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                </Stack>
                <Stack direction="column">
                  <FormControlLabel
                    value="No binario"
                    control={<Radio sx={{ color: "white" }} />}
                    label="No binario"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                  <FormControlLabel
                    value="Prefiero no decir"
                    control={<Radio sx={{ color: "white" }} />}
                    label="No especificar"
                    sx={{ "& .MuiTypography-root": { color: "white" } }}
                  />
                </Stack>
              </RadioGroup>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                value={dayjs(birthdateValue)}
                onChange={(newValue) => handleBirthdateChange(newValue)}
                sx={{
                  "& .MuiInputBase-input": {
                    color: "white",
                  },
                  "& .MuiInputLabel-root": {
                    color: "white",
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              />
            </LocalizationProvider>
          </Stack>
          <Stack direction="column" spacing={4}>
            <TextField
              label="Apellidos"
              value={lastnameValue}
              error={isValidLastname === false}
              onChange={handleApellidoChange}
              variant="filled"
              helperText={
                isValidLastname
                  ? "Ingresa tu apellido"
                  : "No usar número y no mayor a 60 caracteres"
              }
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidLastname ? "grey" : "red",
                },
              }}
            />
            <TextField
              label="Número de documento"
              value={docnumberValue}
              error={isValidDocnumber === false}
              onChange={handleDocnumberChange}
              variant="filled"
              helperText={
                isValidDocnumber
                  ? "Ingresa tu número de documento"
                  : "Solo números y no mayor a 10 caracteres"
              }
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidDocnumber ? "grey" : "red",
                },
              }}
            />
            <TextField
              label="Email"
              value={emailValue}
              error={isValidEmail === false}
              onChange={handleEmailChange}
              variant="filled"
              helperText={
                isValidEmail ? "Ingresa tu email" : "Formato de email invalido"
              }
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidEmail ? "grey" : "red",
                },
              }}
            />
            <TextField
              label="Célular"
              value={phoneValue}
              error={isValidPhone === false}
              onChange={handlePhoneChange}
              variant="filled"
              helperText={
                isValidPhone
                  ? "Ingresa tu número de celular"
                  : "Solo números y debe ser de 10 caracteres"
              }
              sx={{
                "& label": { color: "white" },
                "& input": { color: "white" },
                "& .MuiFormHelperText-root": {
                  color: isValidPhone ? "grey" : "red",
                },
              }}
            />
          </Stack>
        </Stack>
        <Button
          variant="outlined"
          disabled={
            !isValidEmail ||
            !isValidDocnumber ||
            !isValidName ||
            !isValidLastname ||
            !isValidPhone
          }
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
            margin: "15px",
            position: "relative",
            width: "200px",
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
            "&:disabled": {
              backgroundColor: "#BD4243",
            },
          }}
          onClick={handleButtonPress}
        >
          {isnew ? (
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Crear
            </Typography>
          ) : (
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Actualizar
            </Typography>
          )}
        </Button>
        {alert ? <Alert severity="error">Llena todos los campos</Alert> : <></>}
      </Stack>
    </Box>
  );
};

export default UserForm;
