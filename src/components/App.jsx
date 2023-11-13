import React from "react";
import Layout from "../Layout";
import UserList from "../pages/UserList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom" 

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path ="/" element ={<UserList />}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
