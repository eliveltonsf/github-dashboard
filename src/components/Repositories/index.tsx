import React from 'react';
import { Container } from './styles';
import Repository from '../Repository';

interface IRepositoriesProps {
  repositories: {
    id: number;
    name: string;
    description: string;
    html_url: string;
    language: string;
  }[];
}

const Repositories = ({ repositories }: IRepositoriesProps) => {
  const repos = repositories.map((repository) => <Repository key={repository.id} repository={repository} />);
  return <Container>{repos}</Container>;
};

export default Repositories;
