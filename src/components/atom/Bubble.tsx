import React, { useState } from 'react';
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
  const [bubbleColor, toggleBubbleColor] = useState(props.bgColor)

  const randomNum = () => Math.floor(Math.random() * 256)
  const changeColor = () => {
    let r = randomNum()
    let g = randomNum()
    let b = randomNum()
    toggleBubbleColor(`rgb(${r}, ${g}, ${b})`)
  }
  return (
    <>
      <StyledCircle
        onClick={() => changeColor()}
        style={{
          float: props.float,
          top: props.top,
          right: props.right,
          left: props.left,
          backgroundColor: bubbleColor,
          width: props.diameter,
          height: props.diameter,
          marginTop: props.marginTop,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          zIndex: props.zIndex,
          position: 'fixed',
          overflow: 'hidden'
        }}>
      </StyledCircle>
    </>
  );
}

export default Bubble;
