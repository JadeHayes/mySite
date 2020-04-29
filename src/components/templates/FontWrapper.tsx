import styled from "styled-components";
import React from "react";

const StyleMainDiv = styled.div`
  background-color: white;
  z-index: -1;
  position: fixed;
  width: 60%;
  height: 100%;
  text-align: center;
  display: inline-block;
  left: 20%;
`;

export const FontWrapper = () => {
  return (
    <StyleMainDiv>
    </StyleMainDiv>
  );
}