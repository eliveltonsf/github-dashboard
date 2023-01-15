import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

const RepositoriesPage = () => {
  const user = {
    name: 'Elivelton Ferreira',
    login: 'eliveltonsf',
    avatar_url: 'https://avatars.githubusercontent.com/u/17456800?v=4',
    followers: 36,
    following: 59,
    company: '',
    blog: '',
    location: 'Fortaleza - CE',
  };

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
