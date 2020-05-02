import React from 'react';

import css from '../../static/logos/css.png';
import ts from '../../static/logos/typescript.png';
import react from '../../static/logos/react.png';
import antd from '../../static/logos/antd.png';
import styled from 'styled-components';

const StyledLogo = styled.img`
  height: 5em;
  margin: 0 10px 0 10px;
  background: rgb(118, 182, 195, .3);
  border-radius: 50%;
  width: 5em;

  @media only screen and (max-width: 768px) {
    height: 3em;
    width: 3em;
  }
`;

const StyledLogosWrapper = styled.div`
  margin-top: 40px;
`;


const Technologies = () => {
  return (
    <StyledLogosWrapper>
      <h5>Site created with...</h5>
      <StyledLogo src={ts} alt='typescript' />
      <StyledLogo src={react} alt='react' />
      <StyledLogo src={antd} alt='antd' />
      <StyledLogo src={css} alt='css' />
    </StyledLogosWrapper>
  )
};

export default Technologies;