import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

const RepositoriesPage = () => {
  return (
    <Container>
      <Sidebar>
        <Profile />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
