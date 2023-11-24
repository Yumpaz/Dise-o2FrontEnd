import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '@mui/system/Container';
import { Box } from '@mui/material';

const Layout = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [HeaderText, setHeaderText] = useState("Lista de Usuarios")

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const onUserList = () => {
    setHeaderText("Lista de Usuarios");
  }

  const onLogList = () => {
    setHeaderText("Historial de Logs");
  }

  return (
    <Box minHeight= '100vh' sx={{ background: "#FBECD5" }}>
      <Header onSidebarToggle={openSidebar} texto={HeaderText} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} onUser={onUserList} onLog={onLogList}/>
      <Container sx={{ marginTop: "70px"}} >{props.children}</Container>
    </Box>
  );
}

export default Layout;
