import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Container from '@mui/system/Container';

const Layout = (props) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Header onSidebarToggle={openSidebar} />
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <Container maxWidth="lg" sx={{ marginTop: "75px" }} >{props.children}</Container>
    </>
  );
}

export default Layout;
