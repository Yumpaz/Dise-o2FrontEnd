import React from "react";
import Layout from "../Layout";
import UserList from "../pages/UserList";
import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxHeight="100vh" maxWidth="100vh" sx={{ background: "#ECDCC5" }}>
      <Layout>
        <UserList />
      </Layout>
    </Container>
  );
};

export default App;
