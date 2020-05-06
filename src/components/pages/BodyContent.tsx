import styled from "styled-components";
import React from "react";
import JadeHayes from "../atom/Signature";
import CoverPhoto from "../atom/CoverPhoto";
import Technologies from "../molecule/Technologies"
import WorkExperience from "../molecule/WorkExperience";


const StyleMainDiv = styled.div`
  background-color: white;
  z-index: -1;
  overflow: scroll;
  position: fixed;
  width: 70%;
  height: 100%;
  text-align: center;
  display: inline-block;
  left: 15%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    position: static;
  }
`;

export const BodyContent = () => {
  return (
    <StyleMainDiv>
      <CoverPhoto />
      <JadeHayes />
      <Technologies />
      <WorkExperience />
    </StyleMainDiv>
  );
}