import React from 'react';
import { MoviesContext } from '../../UserContext';
import { Back } from './styles';

function People() {
  const { handleBack } = React.useContext(MoviesContext);

  return (
    <>
      <Back onClick={handleBack}>← Home</Back>
    </>
  );
}

export default People;
