import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Logo = styled.img`
  width: 130px;
`;

export const Title = styled.h1`
  font-size: 2.2rem;
  color: ${(props) => props.theme.defaultColors.text};
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 583px;
`;

export const Input = styled.input`
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;

  &::placehoder {
    color: ${(props) => props.theme.assortedColors.metalDark};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background: transparent;
  width: 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.defaultColors.text};
  transition background: 0.3s;

  &:hover {
    background: ${(props) => props.theme.defaultColors.container};
  }
`;
