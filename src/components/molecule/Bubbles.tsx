import React from 'react';
import Bubble from '../atom/Bubble';

const darkCircle = '#76B6C3';
// const lightCircle = '#E6EFF1';  // TODO: Jade need to find a new color.
const lightCircle = 'black';


export const TopBubbles = () => {
  return (
    <>
      <Bubble
        top={0}
        left={0}
        marginTop={220}
        marginLeft={-60}
        bgColor={lightCircle}
        diameter={175}
        zIndex={-2}
      />
      <Bubble
        top={0}
        left={0}
        marginTop={'-6%'}
        marginLeft={'-5%'}
        bgColor={darkCircle}
        diameter={450}
        zIndex={-3}
      />
    </>
  );
}

export const BottomBubbles = () => {
  return (
    <>
      <Bubble
        bgColor={lightCircle}
        diameter={175}
        marginTop={900}
        marginRight={10}
        bottom={0}
        right={-100}
        zIndex={-1}
      />
      <Bubble
        bgColor={darkCircle}
        diameter={450}
        bottom={0}
        right={0}
        marginTop={800}
        marginLeft={-40}
        zIndex={-2}
      />
    </>
  );
}