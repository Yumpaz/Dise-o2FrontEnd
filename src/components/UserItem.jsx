import * as React from "react";
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
  const { name, secondname, lastname, doctype, docnumber, gender, email, birthdate, phone } = props.user;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
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
          src="/images/avatar"
          sx={{
            boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
            "--Avatar-size": "8rem",
          }}
        />
        <Typography
          sx={{ paddingTop: "10px", fontWeight: "bold", color: "black" }}
        >
          {name+" "+lastname}
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
                <UserForm onClose={handleClose} isnew={false} name={name} secondname={secondname} lastname={lastname} doctype={doctype} docnumber={docnumber} gender={gender} email={email} birthdate={birthdate} phone={phone}/>
              </Box>
            </Modal>
            <IconButton>
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
