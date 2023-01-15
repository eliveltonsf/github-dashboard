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

  const languages = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#95a5a6' },
    { name: 'PHP', count: 2, color: '#3498db' },
    { name: 'Ruby', count: 2, color: '#e74c3c' },
    { name: 'Typescript', count: 2, color: '#2980b9' },
  ];

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
