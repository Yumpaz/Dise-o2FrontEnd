import React from "react";
import Grid from "@mui/joy/Grid";
import UserItem from "../components/UserItem";
import dataList from "../data";
import { Container } from "@mui/material";

const UserList = () => {
  const users = dataList;
  return (
    <Container>
      <Grid container spacing={2} >
      {users.map((item, i) => (
        <Grid item xs={12} sm={1} md={3} key={i}>
          {<UserItem key={i} user={item} />}
        </Grid>
      ))}
    </Grid>
    </Container>
  );
};

export default UserList;
