import styled from 'styled-components';

export const Space = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
  justify-items: center;
  margin-top: 8rem;
`;

export const Cartazes = styled.div`
  text-align: center;
  padding: 15px;
  max-height: 100%;
  border-radius: 12px;
  border: 2px solid #ddd;
  margin: 0px 8px 16px 8px;
  background-color: transparent;
`;

export const Itens = styled.li`
  color: #ddd;
  font-size: 1.3rem;
`;

export const Order = styled.span`
  font-weight: bold;
  font-size: 1.3rem;
  color: tomato;
`;

export const Listagem = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: '8px';
`;

export const Back = styled.button`
  padding: 12px;
  border-radius: 10px;
  background: tomato;
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 0.8rem;
  outline: none;
  cursor: pointer;
`;

export const ContainerBtns = styled.div`
  display: flex;
  justify-content: space-between;
`;
