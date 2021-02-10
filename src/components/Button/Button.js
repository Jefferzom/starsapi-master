import React from 'react';
import styled from 'styled-components';

function Button({ children, props }) {
  return <Lista {...props}>{children}</Lista>;
}

export default Button;

const Lista = styled.button`
  font-weight: bold;
  margin-top: 8px;
  font-size: 1.2rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 12px;
  background: orange;
  border-radius: 8px;
  outline: none;
`;
