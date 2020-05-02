import styled from "styled-components";
import React from "react";
import JadeHayes from "../atom/Signature";
import CoverPhoto from "../atom/CoverPhoto";
import SummaryBlock from "../templates/Summary";
import Technologies from "../molecule/Technologies"
import Resume from "../../static/Resume.png"


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

const StyledResume = styled.img`
  margin: 0 10px 0 10px;
  width: 90%;
  height: auto;
`;

export const BodyContent = () => {
  return (
    <StyleMainDiv>
      <CoverPhoto />
      <Technologies />
      <StyledResume src={Resume} alt='resume' />
    </StyleMainDiv>
  );
}