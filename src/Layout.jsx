import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '@mui/system/Container';
import { Box } from '@mui/material';

const Layout = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Box sx={{ background: "#FBECD5" }}>
      <Header onSidebarToggle={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Container sx={{ marginTop: "70px"}} >{props.children}</Container>
    </Box>
  );
}

export default Layout;
