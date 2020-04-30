import React from 'react';
import { TopBubbles, BottomBubbles } from './components/molecule/Bubbles';
import styled from 'styled-components';
import { FontWrapper } from './components/templates/FontWrapper';
import NavBar from './components/templates/NavBar'

const containerColor = '#E6EFF1';

const StyledContainer = styled.div`
  background-color: ${containerColor};
  z-index: -5;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const App = () => {
  return (
    <StyledContainer>
      <NavBar />
      <TopBubbles />
      <FontWrapper />
      <BottomBubbles />
    </StyledContainer>
  );
}

export default App;
