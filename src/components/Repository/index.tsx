/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container, Name, Description, Footer, Lang, Link } from './styles';
import { langColors } from '../../services/config';

interface IRepositoryProps {
  repository: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
  };
}

interface IState {
  [key: string]: string;
}

const Repository = ({ repository }: IRepositoryProps) => {
  const lang: keyof IState = repository.language && repository.language.toLowerCase();
  //@ts-ignore
  const color = langColors[lang];
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">
          Ver
        </Link>
      </Footer>
    </Container>
  );
};

export default Repository;
