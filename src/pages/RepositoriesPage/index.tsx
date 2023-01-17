/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState, useEffect, useMemo } from 'react';

import { Loading, Container, Sidebar, Main } from './styles';
import Profile from '../../components/Profile';
import Filter from '../../components/Filter';
import Repositories from '../../components/Repositories';

import { getLangsFrom } from '../../services/getLangsFrom';

import { getUser, getRepos } from '../../services/api';

const RepositoriesPage = () => {
  const [user, setUser] = useState({} as object);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, repositoriesResponse] = await Promise.all([getUser('eliveltonsf'), getRepos('eliveltonsf')]);

      const userData = userResponse.data;
      const reposData = repositoriesResponse.data;

      setUser({
        name: userData.name,
        login: userData.login,
        avatar_url: userData.avatar_url,
        followers: userData.followers,
        following: userData.following,
        company: userData.company,
        blog: userData.blog,
        location: userData.location,
      });

      const repoFilter = reposData.map(
        (repo: { id: any; name: any; description: any; html_url: any; language: any }) => {
          return {
            id: repo.id,
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            language: repo.language,
          };
        }
      );

      setRepos(repoFilter);

      const filterLang = getLangsFrom({ repoFilter });

      //@ts-ignore
      setLanguages(filterLang);

      setLoading(false);
    };

    loadData();
  }, []);

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
        <Repositories repositories={repos} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  );
};

export default RepositoriesPage;
