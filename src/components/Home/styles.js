import styled from 'styled-components';

export const Titulo = styled.h1`
  margin-top: 30px;
  font-size: 3rem;
  color: white;
  font-weight: bold;
`;

export const Container = styled.section`
  max-width: 100%;
  text-align: center;
`;

export const ContainerLink = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LinkFilms = styled.button`
  padding: 12px 40px 12px 40px;
  font-size: 1.4rem;
  color: tomato;
  background: orange;
  border-radius: 8px;
  outline: none;
  color: #cdd;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #cccc;
  }
`;

export const LinkPeoples = styled.button`
  padding: 12px 40px 12px 40px;
  font-size: 1.4rem;
  color: #cdd;
  font-weight: bold;
  background: orange;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: tomato;
  }
`;
