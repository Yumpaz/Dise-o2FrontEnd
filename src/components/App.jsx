import React from "react";
import Layout from "../Layout";
import UserList from "../pages/UserList";
import { Container } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 
import LogPage from "../pages/LogPage/Logs";

const App = () => {
  return (
    <Router>
      <Container maxHeight="100vh" maxWidth="100vh" sx={{ background: "#ECDCC5" }}>
      <Layout>
        <Routes>
          <Route path ="/" element ={<UserList />}/>
          <Route path="/log" element={<LogPage />}/>
        </Routes>
      </Layout>
    </Container>
    </Router>
  );
};

export default App;
