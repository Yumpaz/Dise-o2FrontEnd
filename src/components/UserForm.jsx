import React, { useState } from "react";
import {
  Box,
  Button,
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
import CheckIcon from "@mui/icons-material/Check";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Alert from "@mui/material/Alert";
import EditBtn from "./EditBTN";
import swal from "sweetalert";

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

  //#region Inicialización
  const [birthdateValue, setBirthdateValue] = useState(
    birthdate ? birthdate : null
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
  const [fileImageValue, setFileImagen] = useState(null);
  //#endregion

  //#region Funciones
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
    const newBirthdate = newValue.format("YYYY-MM-DD");
    setBirthdateValue(newBirthdate);
  };
  const handleButtonPress = async () => {
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
        await createUser();
      } else {
        console.log("Actualizar");
        await updateUser();
        window.location.reload();
      }
    }
  };

  const updateUser = async () => {
    const [year, month, day] = birthdateValue.split("-");
    const userData = {
      first_name: nameValue,
      middle_name: secondnameValue,
      last_name: lastnameValue,
      gender: genderValue,
      email: emailValue,
      birth_date: `${day}-${month}-${year}`,
      phone: phoneValue,
    };
    try {
      const response = await fetch(
        `http://172.203.155.199:8000/people/${docnumber}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (!response.ok) {
        throw new Error("Error al actualizar el usuario");
      }
    } catch (error) {
      console.error("Hubo un error:", error);
    }

    if (fileImageValue) {
      const formData = new FormData();
      formData.append("file", fileImageValue);
      try {
        const response = await fetch(
          `http://172.203.155.199:8000/people/${docnumber}/image`,
          {
            method: "PATCH",
            body: formData,
          }
        );

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        console.log("Archivo subido con éxito:", data);
      } catch (error) {
        console.error("Error al subir el archivo:", error);
      }
    }
  };

  const createUser = async () => {
    const [year, month, day] = birthdateValue.split("-");
    const userData = {
      document_type: doctypeValue,
      document_id: docnumberValue,
      first_name: nameValue,
      middle_name: secondnameValue,
      last_name: lastnameValue,
      gender: genderValue,
      email: emailValue,
      birth_date: `${day}-${month}-${year}`,
      phone: phoneValue,
    };
    try {
      const response = await fetch(`http://172.203.155.199:8000/people`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("hola");

      if (!response.ok) {
        if (response.status === 400) {
          const data = await response.json();
          swal({
            title: "Usuario existente",
            text: data.detail,
            icon: "error",
            button: { text: "Aceptar", className: "custom-button" },
          });
        } 
      } else {
        if (fileImageValue) {
          const formData = new FormData();
          formData.append("file", fileImageValue);
          try {
            const response = await fetch(
              `http://172.203.155.199:8000/people/${docnumberValue}/image`,
              {
                method: "PATCH",
                body: formData,
              }
            );

            if (!response.ok) {
              throw new Error(`Error HTTP: ${response.status}`);
            }
          } catch (error) {
            console.error("Error al subir el archivo:", error);
          }
        }
        window.location.reload();
      }
    } catch (error) {
      console.error("Hubo un error:", error);
    }
  };

  const manejarErrorImagen = () => {
    setImagen("/images/avatar");
  };

  const updateImage = (file) => {
    setFileImagen(file);
    const newImageSrc = URL.createObjectURL(file);
    setImagen(newImageSrc);
  };
  //#endregion Funciones

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
          <EditBtn setImage={updateImage}></EditBtn>
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
                <Typography variant="subtitle2" sx={{ color: "white" }}>
                  Tipo de documento
                </Typography>
              </FormLabel>
              <RadioGroup
                row
                value={doctypeValue}
                onChange={(e) => setDoctypeValue(e.target.value)}
              >
                <FormControlLabel
                  value="Cédula"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-disabled": { color: "gray" },
                      }}
                    />
                  }
                  label="Cédula"
                  sx={{
                    "& .MuiTypography-root": { color: "white" },
                    "& .MuiTypography-root.Mui-disabled": { color: "gray" },
                  }}
                  disabled={!isnew}
                />
                <FormControlLabel
                  value="Tarjeta de identidad"
                  control={
                    <Radio
                      sx={{
                        color: "white",
                        "&.Mui-disabled": { color: "gray" },
                      }}
                    />
                  }
                  disabled={!isnew}
                  label="Tarjeta de identidad"
                  sx={{
                    "& .MuiTypography-root": { color: "white" },
                    "& .MuiTypography-root.Mui-disabled": { color: "gray" },
                  }}
                />
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormLabel
                sx={{ color: "white", "&.Mui-focused": { color: "white" } }}
              >
                <Typography variant="subtitle2" sx={{ color: "white" }}>
                  Género
                </Typography>
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
            <Typography variant="subtitle2" sx={{ color: "white" }}>
              Fecha de Nacimiento
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="YYYY-MM-DD"
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
          <Stack direction="column" spacing={5.5}>
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
              disabled={!isnew}
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
                "& .MuiInputBase-input.Mui-disabled": {
                  WebkitTextFillColor: "gray",
                },
                "& label.Mui-disabled": { color: "gray" },
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
