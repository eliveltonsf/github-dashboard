import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

const Repository = () => {
  return (
    <Container color="#f37272">
      <Name>github-dashboard</Name>
      <Description>Descrição do repositoriot</Description>
      <Footer color="#f37272">
        <Lang>Typescript</Lang>
        <Link href="https://github.com/eliveltonsf/github-dashboard" target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

export default Repository;
