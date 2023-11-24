import React from "react";
import { Drawer, List, ListItem, Button, Typography } from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HistoryIcon from "@mui/icons-material/History";
import PageIcon from "./images/pageicon.png";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, onClose, onUser, onLog }) => {
  const navigate = useNavigate()
  
  return (
    <Drawer open={isOpen} onClose={onClose}>
      <List sx={{ background: "#001233", height: "100vh", padding: "10px" }}>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button onClick={onClose}>
            <img
              src={PageIcon}
              alt="Icono De Página"
              width="200"
              height="180"
            />
          </Button>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button
            variant="outlined"
            startIcon={
              <PersonOutlineIcon
                sx={{ width: "30px", height: "30px", color: "black" }}
              />
            }
            sx={{
              display: "flex",
              flexdirection: "row",
              justifycontent: "center",
              alignitems: "center",
              gap: "6px",
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
            onClick={() => {navigate("/"); onUser(); onClose()}}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Lista de Usuarios
            </Typography>
          </Button>
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "20px",
          }}
        >
          <Button
            variant="outlined"
            startIcon={
              <HistoryIcon
                sx={{ width: "30px", height: "30px", color: "black" }}
              />
            }
            sx={{
              display: "flex",
              flexdirection: "row",
              justifycontent: "center",
              alignitems: "center",
              gap: "6px",
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
            onClick={() => {navigate("/Logs"); onLog(); onClose()}}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Historial de Logs
            </Typography>
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
