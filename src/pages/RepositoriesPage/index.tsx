/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import { Container, Sidebar, Main } from './styles';
import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

import { getLangsFrom } from '../../services/getLangsFrom';

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

  const repositories = [
    {
      id: 1,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'JavaScript',
    },
    {
      id: 2,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'JavaScript',
    },
    {
      id: 3,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'PHP',
    },
    {
      id: 4,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'Ruby',
    },
    {
      id: 5,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'Typescript',
    },
    {
      id: 6,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'Typescript',
    },
    {
      id: 7,
      name: 'apirest-projects-and-tasks',
      description: 'Creating an Api Restful with Nodejs and expressJS to register projects and their respective tasks.',
      html_url: 'https://github.com/eliveltonsf/apirest-projects-and-tasks',
      language: 'C#',
    },
  ];

  const languages = getLangsFrom({ repositories });

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
