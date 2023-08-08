import * as React from 'react';
import Header from './Header';
import Tabs from './Tabs';
import Container from '@mui/material/Container';

const UserManagement = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{padding: "30px"}}>
        <Header/>
        <Tabs/>
      </Container>
    </>
  )
}

export default UserManagement;