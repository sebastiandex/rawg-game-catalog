import styled from 'styled-components';

const Container = styled.div`
  padding: 15px;
  width: 270px;
  height: 305px;
  background-color: #222222;
  border-radius: 10px;
  cursor: pointer;
  
  &:hover {
    background-color: #111111;
  }
`

const Title = styled.div`
  height: 65px;
    font-size: 18px;
    padding: 10px 0;
`

export {Container, Title}