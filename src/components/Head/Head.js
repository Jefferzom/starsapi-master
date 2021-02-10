import React from 'react';
import StarLogo from '../../assets/star-wars-logo-2.png';
import { Header } from './styles';

function Head() {
  return (
    <Header>
      <img className="StarLogo" src={StarLogo} alt="Star Wars Logo" />
    </Header>
  );
}

export default Head;
