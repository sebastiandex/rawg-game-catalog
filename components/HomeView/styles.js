import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 2rem;
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill,270px);
  grid-template-rows: 305px 305px;
  grid-gap: 10px;
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

export {MainContainer, GridWrapper, Loader}