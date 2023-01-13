import React from 'react';

import { Container, Header, Avatar, Login, Name } from './styles';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src="https://github.com/eliveltonsf.png" alt="Elivelton Ferreira"></Avatar>
        <Login>eliveltonsf</Login>
        <Name>Elivelton Ferreira</Name>
      </Header>
    </Container>
  );
};

export default Profile;
