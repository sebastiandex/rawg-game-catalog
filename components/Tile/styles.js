import styled from 'styled-components';

const Container = styled.div`
  width: 350px;
  height: 300px;
  background-color: #222222;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #111111;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.div`
  height: 35px;
  font-size: 18px;
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 65%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`

const InfoContainer = styled.div`
  padding: 10px 15px;
`

const InfoBlock = styled.div`
  font-size: 12px;
  color: whitesmoke;
  font-weight: bolder;
  margin-bottom: 10px;
`

export {Container, Title, ImageContainer, InfoContainer, InfoBlock}