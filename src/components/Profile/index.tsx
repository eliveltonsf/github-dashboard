import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

const Profile = () => {
  return (
    <Container>
      <Header>
        <Avatar src="https://github.com/eliveltonsf.png" alt="Elivelton Ferreira"></Avatar>
        <Login>eliveltonsf</Login>
        <Name>Elivelton Ferreira</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
        </Data>
        <Data>
          <MdWork size={20} />
          EF Development
        </Data>
        <Data>
          <MdLocationCity size={20} />
          Fortaleza CE{' '}
        </Data>
        <Data>
          <MdLink size={20} />
          <a href="https://www.linkedin.com/in/eliveltonsf/">Linkedin/eliveltonsf</a>
        </Data>
      </Inner>
    </Container>
  );
};

export default Profile;
