import React from 'react';

import { Container, Selector, Cleaner } from './styles';
import { MdOutlineFilterAlt } from 'react-icons/md';

interface IFilterProps {
  languages: { name: string; count: number; color: string }[];
  currentLanguage: string;
  onClick: (name: string) => void;
}

const Filter = ({ languages, currentLanguage, onClick }: IFilterProps) => {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick('')}>
        <MdOutlineFilterAlt size={20} />
        Limpar
      </Cleaner>
    </Container>
  );
};

export default Filter;
