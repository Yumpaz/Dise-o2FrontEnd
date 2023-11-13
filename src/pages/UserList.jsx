import React, { useEffect } from "react";
import Grid from "@mui/joy/Grid";
import UserItem from "../components/UserItem";
import dataList from "../data";
import { Button, Container, Typography } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const UserList = () => {
  const users = dataList;
  
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
              flexdirection: "row",
              justifycontent: "center",
              alignitems: "center",
              gap: "6px",
              position: "absolute",
              top: "0",
              right: "0",
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
            //onClick={}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Add User
            </Typography>
          </Button>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        {users.map((item, i) => (
          <Grid item key={i}>
            {<UserItem key={i} user={item} />}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UserList;
