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

const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 150px;
  background: whitesmoke;
  border-radius: 15px;
  color: black;
  font-weight: bolder;
  font-size: 13px;
  margin: 15px auto;
`
const Title = styled.div`
    font-size: 18px;
    padding: 10px 0;
`

export {Container, Title}