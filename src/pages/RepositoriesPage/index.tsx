/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect } from 'react';

import { Loading, Container, Sidebar, Main } from './styles';
import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

import { getLangsFrom } from '../../services/getLangsFrom';

import { getUser } from '../../services/api';

const RepositoriesPage = () => {
  const [user, setUser] = useState('');
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse] = await Promise.all([getUser('eliveltonsf')]);

      setUser(userResponse.data);
      setLoading(false);
    };

    loadData();
  }, []);

  // const user = {
  //   name: 'Elivelton Ferreira',
  //   login: 'eliveltonsf',
  //   avatar_url: 'https://avatars.githubusercontent.com/u/17456800?v=4',
  //   followers: 36,
  //   following: 59,
  //   company: '',
  //   blog: '',
  //   location: 'Fortaleza - CE',
  // };

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

  const onFilterClick = (language: string) => {
    !language ? setCurrentLanguage('') : setCurrentLanguage(language);
  };

  if (loading) {
    return <Loading>Carregando...</Loading>;
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick} />
      </Sidebar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
