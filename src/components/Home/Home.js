import React from 'react';
import { Link } from 'react-router-dom';
import {
  Titulo,
  Container,
  ContainerLink,
  LinkFilms,
  LinkPeoples,
} from './styles';

function Home() {
  return (
    <>
      <Container>
        <Titulo>Escolha sua lista abaixo ↓</Titulo>
        <ContainerLink>
          <Link to="/films">
            <LinkFilms>Filmes</LinkFilms>
          </Link>
          <Link to="/peoples">
            <LinkPeoples>Atores</LinkPeoples>
          </Link>
        </ContainerLink>
      </Container>
    </>
  );
}

export default Home;
