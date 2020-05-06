import React, { useState } from 'react';

import css from '../../static/logos/css.png';
import ts from '../../static/logos/typescript.png';
import react from '../../static/logos/react.png';
import antd from '../../static/logos/antd.png';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import TechLogo from '../atom/TechLogo';

const StyledH4 = styled.h4`
  margin-top: 30px;
`;

type TypeLogo = {
  src: string,
  text: string,
  githubLink: string
}

const logos = [
  { src: ts, text: 'typescript', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/components/molecule/Technologies.tsx#L37' },
  { src: react, text: 'react', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/index.tsx#L9' },
  { src: antd, text: 'antd', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/components/atom/Bubble.tsx#L34' },
  { src: css, text: 'css', githubLink: 'https://github.com/JadeHayes/mySite/blob/master/src/App.tsx#L10' }
];

const WorkExperience = () => {
  return (
    <Col>
      <Row gutter={[16, 24]}>
        <img src='' />
      </Row>
    </Col>
  )
};

export default WorkExperience;
