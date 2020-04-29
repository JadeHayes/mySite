import React from 'react';
import { TopBubbles, BottomBubbles } from './components/molecule/Bubbles';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 960px;
`;
const App = () => {
  return (
    <StyledWrapper>
      <TopBubbles />
      <BottomBubbles />
    </StyledWrapper>
  );
}

export default App;
