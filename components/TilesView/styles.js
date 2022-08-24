import styled from 'styled-components';

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`
const Loader = styled.div`
  position: fixed;
  bottom: 15px;
  right: 30px;
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

export {GridWrapper, Loader}