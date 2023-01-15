import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';

interface IRepositoryProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}

const Repository = ({ repository }: IRepositoryProps) => {
  return (
    <Container color="#f37272">
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color="#f37272">
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

export default Repository;
