import React from "react";
import Grid from "@mui/joy/Grid";
import dataList from "../../data";
import { Container } from "@mui/material";
import FiltersView from "./Components/Filters";
import MyTable from "./Components/Table";

const LogPage = () => {
  return (
    <Container>
      <FiltersView></FiltersView>
      <MyTable/>
    </Container>
  );
};

export default LogPage;
