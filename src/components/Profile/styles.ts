import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
`;

export const Header = styled.div`
  display: Flex;
  flex-direction: column;
  padding: 1rem 0;
  position: relative;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const Exit = styled(Link)`
  position: absolute;
  display: flex;
  align-items: center;
  right: 0;
  text-decoration: none;

  svg {
    margin-left: 5px;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    top: 1rem;
  }
`;

export const Avatar = styled.img`
  align-self: center;
  border-radius: 50%;
  width: 70%;
  margin-bottom: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    margin-bottom: 0;
  }
`;

export const Login = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.title};
`;

export const Name = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  font-weight: normal;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Inner = styled.div`
  padding: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

export const Data = styled.p`
  display: flex;
  align-items: center;
  line-height: 1.5;

  svg {
    margin-right: 10px;
  }
`;
