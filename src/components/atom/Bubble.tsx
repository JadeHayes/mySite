import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  padding: 10px;
  margin: 20px;
  display: inline-block;
  border-radius: 50%;
  width: 500px;
  height: 500px;
`;

export type BubbleType = { bgColor: string, diameter: number, zIndex: number, top?: number, left?: number, right?: number, bottom?: number }
const Bubble = (props: BubbleType) => {
  return (
    <>
      <StyledCircle
        style={{
          backgroundColor: props.bgColor,
          width: props.diameter,
          height: props.diameter,
          position: 'absolute',
          bottom: props.bottom,
          top: props.top,
          left: props.left,
          right: props.right,
          zIndex: props.zIndex,
        }}>
      </StyledCircle>
    </>
  );
}

export default Bubble;
