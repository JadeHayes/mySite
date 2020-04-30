import React from 'react';
import JadeHayesSignature from '../../static/JadeHayesSignature.png';
import styled from 'styled-components';

const StyledImg = styled.img`
  height: auto;
  width: 80%;
  position: relative;
  margin-top: 30px;
`;


const JadeHayes = () => {
  return (
    <StyledImg src={JadeHayesSignature} />
  )
}

export default JadeHayes;