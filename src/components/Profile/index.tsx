/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';

import { Container, Header, Avatar, Login, Name, Inner, Data } from './styles';

export interface IProfileProps {
  user: {
    name?: string;
    login?: string;
    avatar_url?: string;
    followers?: number;
    following?: number;
    company?: string;
    blog?: string;
    location?: string;
  };
}

const Profile = ({ user }: IProfileProps) => {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} alt={user.name}></Avatar>
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp; {user.followers}&nbsp;<i>seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (
          <Data>
            <MdLocationCity size={20} />
            {user.location}
          </Data>
        )}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\${user.blog}`}>{user.blog}</a>
          </Data>
        )}
      </Inner>
    </Container>
  );
};

export default Profile;
