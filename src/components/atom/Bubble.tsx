import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  padding: 10px;
  margin: 20px;
  display: inline-block;
  border-radius: 50%;
`;

type Margins = { marginTop?: number | string, marginRight?: number | string, marginBottom?: number | string, marginLeft?: number | string }
interface BubbleInterface extends Margins {
  bgColor: string;
  diameter: number;
  zIndex: number;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
  float?: "inherit" | "none" | "initial" | "left" | "right" | "-moz-initial" | "revert" | "unset" | "inline-end" | "inline-start"
}
const Bubble = (props: BubbleInterface) => {
  return (
    <>
      <StyledCircle
        style={{
          float: props.float,
          top: props.top,
          backgroundColor: props.bgColor,
          width: props.diameter,
          height: props.diameter,

          marginTop: props.marginTop,
          marginRight: props.marginRight,
          marginBottom: props.marginBottom,
          marginLeft: props.marginLeft,


          zIndex: props.zIndex,
          position: 'absolute',
          overflow: 'hidden'
        }}>
      </StyledCircle>
    </>
  );
}

export default Bubble;
