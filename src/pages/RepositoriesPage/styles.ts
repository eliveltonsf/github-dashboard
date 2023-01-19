/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from 'styled-components';
import BeatLoader from 'react-spinners/BeatLoader';

export const ContainerLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Loading = styled(BeatLoader).attrs((props) => ({
  color: `${props.theme.defaultColors.light}`,
  size: 20,
}))``;

export const Container = styled.main`
  display: flex;
  min-height: 100vh;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Sidebar = styled.aside`
  background: ${(props) => props.theme.defaultColors.background};
  min-width: 20rem;
  max-height: 100vh;
  overflow-y: hidden;

  &:hover {
    position: relative;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: black transparent;

    &::-webkit-scrollbar {
      width: 5px;
      margin: 5px; /* A altura só é vista quando a rolagem é horizontal */
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 50px;
    }
  }
`;

export const Main = styled.section`
  background: ${(props) => props.theme.defaultColors.container};
  width: 100%;
  height: 100vh;
  padding: 40px;
  overflow-y: hidden;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 100%;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 40px 20px;
  }

  &:hover {
    position: relative;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: black transparent;

    &::-webkit-scrollbar {
      width: 5px;
      margin: 5px; /* A altura só é vista quando a rolagem é horizontal */
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 50px;
    }
  }
`;
