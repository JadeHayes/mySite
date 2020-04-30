import styled from "styled-components";
import React from "react";
import JadeHayes from "../atom/Signature";
import CoverPhoto from "../atom/CoverPhoto";
import SummaryBlock from "../templates/Summary";

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

export const BodyContent = () => {
  return (
    <StyleMainDiv>
      <CoverPhoto />
      <JadeHayes />
      <SummaryBlock />
    </StyleMainDiv>
  );
}