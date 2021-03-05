import React from 'react';
import { MoviesContext } from '../../UserContext';
import { BackTo } from './styles';

function People() {
  const { handleBack, handleFilms, personas } = React.useContext(MoviesContext);
  console.log(personas);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <BackTo onClick={handleBack}> ← Home</BackTo>
        <BackTo onClick={handleFilms}>← Films</BackTo>
      </div>
      {personas &&
        personas.map((item, i) => (
          <ul
            key={i}
            style={{
              fontSize: '1.5rem',
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            <li>
              Nome: <span style={{ color: 'tomato' }}>{item.name}</span>
            </li>
            <li>
              Peso: <span>{item.mass}</span>
            </li>
            <li>
              Cor do Cabelo: <span>{item.hair_color}</span>
            </li>
            <li>
              Cor da pele: <span>{item.skin_color}</span>
            </li>
            <li>
              Cor dos olhos: <span>{item.eye_color}</span>
            </li>
            <li>
              Data de aniversário: <span>{item.birth_year}</span>
            </li>
            <li>
              Gênero: <span>{item.gender}</span>
            </li>
            <hr />
          </ul>
        ))}
    </>
  );
}

export default People;
