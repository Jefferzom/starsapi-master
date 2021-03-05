import React from 'react';
import { Link } from 'react-router-dom';
import {
  Titulo,
  Container,
  ContainerLink,
  LinkFilms,
  LinkPeoples,
  CartazFilme,
} from './styles';

function Home() {
  return (
    <>
      <Container>
        <Titulo>Botão da lista abaixo ↓</Titulo>
        <ContainerLink>
          <Link to="/films">
            <LinkFilms>Lista de filmes</LinkFilms>
          </Link>
          <Link to="/peoples">
            <LinkPeoples>Lista de Atores</LinkPeoples>
          </Link>
        </ContainerLink>
      </Container>
    </>
  );
}

export default Home;
