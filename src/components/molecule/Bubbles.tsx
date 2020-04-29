import React from 'react';
import Bubble from '../atom/Bubble';

const darkCircle = '#76B6C3';
const lightCircle = '#E6EFF1';

const Bubbles = () => {
  return (
    <div>
      <Bubble
        bgColor={lightCircle}
        diameter={250}
        top={120}
        left={-100}
        zIndex={1}
      />
      <Bubble
        bgColor={darkCircle}
        diameter={450}
        top={-150}
        left={-150}
        zIndex={-1}
      />
      <Bubble
        bgColor={lightCircle}
        diameter={250}
        bottom={120}
        right={-100}
        zIndex={1}
      />
      <Bubble
        bgColor={darkCircle}
        diameter={450}
        bottom={-150}
        right={-150}
        zIndex={-1}
      />
    </div>
  );
}

export default Bubbles;
