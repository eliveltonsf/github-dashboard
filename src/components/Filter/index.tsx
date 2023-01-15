import React from 'react';

import { Container, Selector, Cleaner } from './styles';

interface IFilterProps {
  languages: { name: string; count: number; color: string }[];
}

const Filter = ({ languages }: IFilterProps) => {
  const selectors = languages.map(({ name, count, color }, index) => (
    <Selector key={index} color={color}>
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  );
};

export default Filter;
