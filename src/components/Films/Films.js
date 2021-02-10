import React from 'react';
import {
  Space,
  Cartazes,
  Listagem,
  Itens,
  Order,
  Back,
  ContainerBtns,
} from './styles';
import { MoviesContext } from '../../UserContext';
import { urls } from '../../services/apiCapas';

function Films() {
  const { movies, handleBack, handleNext } = React.useContext(MoviesContext);

  return (
    <>
      <ContainerBtns>
        <Back onClick={handleBack}>Home ←</Back>
        <Back onClick={handleNext}>Pessoas →</Back>
      </ContainerBtns>
      <Space>
        {movies &&
          movies.map((item, i) => (
            <Cartazes className="animeLeft">
              <Listagem key={item.episode_id}>
                <img
                  style={{ after: '', borderBottom: '2px solid #c1f' }}
                  src={urls[i].url}
                  alt="Cartazes"
                />
                <Itens>
                  <Order>Título: </Order>
                  {item.title}
                </Itens>
                <Itens>
                  <Order>Diretor: </Order>
                  {item.director}
                </Itens>
                <Itens>
                  <Order>Produto: </Order>
                  {item.producer}
                </Itens>
                <Itens>
                  <Order>Número do Episódio: </Order>
                  {item.episode_id}
                </Itens>
                <Itens>
                  <Order>Data de Lançamento: </Order>
                  {item.release_date}
                </Itens>
              </Listagem>
            </Cartazes>
          ))}
      </Space>
    </>
  );
}

export default Films;
