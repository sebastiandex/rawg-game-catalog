import styled from 'styled-components';

const MainContainer = styled.div`
  padding: 2rem;
`;

const TopBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
`;

const InfoBlock = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 10px;
`;

const Title = styled.h1``;

const Description = styled.div``;

const BackButton = styled.a`
  cursor: pointer;
  &:hover {
    color: slategray;
  }
`;

const StyledLink = styled.a`
  font-size: 12px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  &:hover {
    color: slategray;
  }
`;

const Span = styled.span`
    color: whitesmoke;
    font-weight: bolder;
  margin-bottom: 10px;

`

export {Description, MainContainer, TopBlock, InfoBlock, StyledLink, Title, BackButton, Span}