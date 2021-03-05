import React from 'react';
import { Container, CopyWritter } from './styles';

function Footer() {
  return (
    <Container>
      <CopyWritter className="animeLeft">
        Alguns direitos reservados | Github:{' '}
        <a target="_blank" href="https://github.com/Jefferzom/starsapi-master">
          Jefferzom
        </a>
      </CopyWritter>
    </Container>
  );
}

export default Footer;
