import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import PageIconMini from "./images/pageiconmini.png";

const Header = ({ onSidebarToggle, texto }) => {
  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#001233",
          minHeight: "100vh",
          minWidth: "100vh"
        }}
      >
        <Button
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onSidebarToggle}
        >
          <img src={PageIconMini} alt="Icono De Página" width="45" height="45" />
        </Button>
        <Typography variant="h5" sx={{ margin: "auto" }}>
          {texto}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
