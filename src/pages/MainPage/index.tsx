/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MdSearch } from 'react-icons/md';
import githubLogo from '../../assets/images/github-logo.svg';

import { Container, Logo, Title, Form, Input, Button } from './styles';

const MainPage = () => {
  const [login, setLogin] = useState('');
  const [islogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  const getChangeLogin = (event: any) => {
    setLogin(event.target.value);
    setIsLogin(true);
  };

  const sendLoginToRoute = () => {
    islogin ? navigate(`/${login}/repositories`) : alert('Informe o usuário');
  };

  return (
    <Container>
      <Logo src={githubLogo} alt="API Github" />
      <Title>API GitHub</Title>
      <Form>
        <Input
          onKeyDown={(event) => event.key === 'Enter' && sendLoginToRoute}
          value={login}
          onChange={getChangeLogin}
        />
        <Button onClick={sendLoginToRoute}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;
