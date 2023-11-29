import * as React from "react";
import { useState } from "react";
import { Typography, IconButton, ButtonGroup, Box } from "@mui/material";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Modal from "@mui/material/Modal";
import UserForm from "./UserForm";

const UserItem = (props) => {
  const {
    first_name,
    middle_name,
    last_name,
    document_type,
    document_id,
    gender,
    email,
    birth_date,
    phone,
    photo_url,
  } = props.user;
  const handleDeleteUser = props.delete;
  const [open, setOpen] = React.useState(false);
  const [imagen, setImagen] = useState(photo_url);

  const manejarErrorImagen = () => {
    setImagen("/images/avatar");
  };
  const handleOpen = async () => {
    // dummy option to log the user data
    await fetch(`http://172.203.155.199:8000/people/${document_id}`);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        width: 200,
        height: 260,
        maxWidth: "100%",
        boxShadow: "lg",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          src={imagen}
          onError={manejarErrorImagen}
          sx={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            "--Avatar-size": "8rem",
          }}
        />
        <Typography
          sx={{ paddingTop: "10px", fontWeight: "bold", color: "black" }}
        >
          {first_name + " " + last_name}
        </Typography>
      </CardContent>
      <CardOverflow sx={{ bgcolor: "background.level1" }}>
        <CardActions buttonFlex="1">
          <ButtonGroup
            variant="outlined"
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              bgcolor: "background.surface",
            }}
          >
            <IconButton onClick={handleOpen}>
              <MoreHorizIcon
                sx={{ width: "40px", height: "40px", color: "black" }}
              />
            </IconButton>
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
                  isnew={false}
                  name={first_name}
                  secondname={middle_name}
                  lastname={last_name}
                  doctype={document_type}
                  docnumber={document_id}
                  gender={gender}
                  email={email}
                  birthdate={birth_date}
                  phone={phone}
                  image={imagen}
                />
              </Box>
            </Modal>
            <IconButton onClick={()=>handleDeleteUser(document_id)}>
              <DeleteForeverIcon
                sx={{ width: "40px", height: "40px", color: "red" }}
              />
            </IconButton>
          </ButtonGroup>
        </CardActions>
      </CardOverflow>
    </Card>
  );
};

export default UserItem;
