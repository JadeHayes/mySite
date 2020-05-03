import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'antd';

const StyledLogo = styled.img`
  height: 5em;
  margin: 0 10px 0 10px;
  background: rgb(118, 182, 195, .3);
  border-radius: 50%;
  width: 5em;
  display: inline-block;
  box-shadow: 2px 2px rgb(105, 90, 90, .2);

  @media only screen and (max-width: 768px) {
    height: 3em;
    width: 3em;
  }
`;

const StyledCol = styled(Col)`
  display: inline-block;

  .techText:hover {
    opacity: 1;
  }
`;


const StyledText = styled.small`
  margin-top: 20px;
  color: black;
  text-align: center;
  display: block;
`;

type PropsTechLogo = {
  logoSrc: string
  text: string
  githubLink: string
}

const TechLogo = (props: PropsTechLogo) => {
  const [hideText, updateHideText] = useState(true)
  const [currentOpacity, updateOpacity] = useState(0)

  return (
    <StyledCol span={6}
      onMouseEnter={() => updateOpacity(1)}
      onMouseLeave={() => updateOpacity(0)}>
      <a href={props.githubLink} target='_blank'>
        <StyledLogo
          onMouseEnter={() => updateHideText(!hideText)}
          onMouseLeave={() => updateHideText(!hideText)}
          src={props.logoSrc} alt={props.text} />
      </a>
      <StyledText style={{ opacity: currentOpacity }}>{props.text}</StyledText>
    </StyledCol >
  )
};

export default TechLogo;