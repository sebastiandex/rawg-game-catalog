import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Input = styled.input`
    width: 200px;
    color: white;
    margin-right: 15px;
  margin-bottom: 10px;
  
  &::placeholder {
    color: whitesmoke;
  }
`
const Select = styled.select`
  margin-right: 15px;
  margin-bottom: 10px;
`

export {Container, Input, Select}