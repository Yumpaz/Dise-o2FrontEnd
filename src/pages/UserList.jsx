import React, { useState, useEffect } from "react";
import Grid from "@mui/joy/Grid";
import UserItem from "../components/UserItem";
import { Box, Button, Container, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Modal from "@mui/material/Modal";
import UserForm from "../components/UserForm";

const UserList = () => {
  const [users, setDatos] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    fetch("http://172.203.155.199:8000/people")
      .then((respuesta) => {
        if (!respuesta.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        return respuesta.json();
      })
      .then((data) => {
        setDatos(data);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  }, []);

  return (
    <Container sx={{ position: "relative", paddingTop: "80px" }}>
      <Button
        variant="outlined"
        startIcon={
          <PersonAddIcon
            sx={{ width: "30px", height: "30px", color: "black" }}
          />
        }
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "6px",
          position: "absolute",
          top: "0",
          right: "0",
          width: "206px",
          height: "60px",
          background: "#FF595A",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "8px",
          "&:hover .MuiTypography-root": {
            color: "white",
          },
          "&:hover .MuiSvgIcon-root": {
            color: "white",
          },
        }}
        onClick={handleOpen}
      >
        <Typography sx={{ fontWeight: "bold", color: "black" }}>
          Agregar
        </Typography>
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: 24,
          }}
        >
          <UserForm
            onClose={handleClose}
            isnew={true}
            name={""}
            secondname={""}
            lastname={""}
            doctype={""}
            docnumber={""}
            gender={""}
            email={""}
            birthdate={""}
            phone={""}
          />
        </Box>
      </Modal>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        {users.map((item, i) => (
          <Grid key={i}>{<UserItem key={i} user={item} />}</Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;
