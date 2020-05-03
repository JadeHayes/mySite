import React, { useState } from 'react';

import css from '../../static/logos/css.png';
import ts from '../../static/logos/typescript.png';
import react from '../../static/logos/react.png';
import antd from '../../static/logos/antd.png';
import styled from 'styled-components';
import { Row } from 'antd';
import TechLogo from '../atom/TechLogo';

const StyledLogosWrapper = styled.div`
  position: static;
`;

const StyledH4 = styled.h4`
  margin-top: 60px;
`;

type TypeLogo = {
  src: string,
  text: string,
  githubLink: string
}

const logos = [
  { src: ts, text: 'typescript', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/components/molecule/Technologies.tsx#L37' },
  { src: react, text: 'react', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/index.tsx#L7' },
  { src: antd, text: 'antd', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/components/atom/Bubble.tsx#L34' },
  { src: css, text: 'css', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/App.tsx#L10' }
];

const Technologies = () => {
  return (
    <StyledLogosWrapper>
      <StyledH4>Site created with...</StyledH4>
      <Row gutter={[16, 24]}>
        {logos.map((logo: TypeLogo) => <TechLogo logoSrc={logo.src} text={logo.text} githubLink={logo.githubLink} />)}
      </Row>
    </StyledLogosWrapper>
  )
};

export default Technologies;
