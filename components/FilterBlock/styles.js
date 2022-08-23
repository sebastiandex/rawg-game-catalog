import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`

const Input = styled.input`
    width: 200px;
    color: white;
    margin-right: 15px;


  &::placeholder {
    color: whitesmoke;
  }
`
const Select = styled.select`
  margin-right: 15px;
`

export {Container, Input, Select}