import React from 'react';
import Bubble from '../atom/Bubble';
import styled from 'styled-components';

const darkCircle = '#76B6C3';
// const lightCircle = '#E6EFF1';
const lightCircle = 'black';
const containerColor = '#E6EFF1';

const StyledContainer = styled.div`
  background-color: ${containerColor};
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -5;
`;

export const TopBubbles = () => {
  return (
    <StyledContainer>
      <Bubble
        float={'left'}
        top={0}
        right={0}
        marginTop={'20%'}
        marginLeft={'-90%'}
        bgColor={lightCircle}
        diameter={175}
        zIndex={-1}
      />
      <Bubble
        float={'left'}
        top={0}
        right={0}
        marginTop={'-20%'}
        marginLeft={'-90%'}
        bgColor={darkCircle}
        diameter={450}
        zIndex={-2}
      />
    </StyledContainer>
  );
}

export const BottomBubbles = () => {
  return (
    <>
      <Bubble
        bgColor={lightCircle}
        diameter={250}
        marginTop={'50%'}
        marginLeft={'60%'}
        // marginLeft={'60%'}
        right={-100}
        zIndex={-1}
      />
      <Bubble
        float={'right'}
        bgColor={darkCircle}
        diameter={450}
        bottom={0}
        right={0}
        marginTop={'6%'}
        marginLeft={'6%'}
        zIndex={-2}
      />
    </>
  );
}