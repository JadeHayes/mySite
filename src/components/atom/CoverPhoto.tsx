import React from 'react';
import JadePhoto from '../../static/JadePhoto.png';
import styled from 'styled-components';
import { mainTeal } from '../../styles/ThemeHelper';

const StyledImg = styled.img`
  height: auto;
  width: 20%;
  text-align: center;
  position: relative;
  display: inline-block;
  margin-top: 60px;

  @media only screen and (max-width: 768px) {
    width: 30%;
    margin-top: 40px;
  }
  `;

const StyledSmall = styled.small`
  text-align: center;
  padding-top: 5px;
  color: ${mainTeal}
  margin-bottom: 40px;

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const JadesPhoto = () => {
  return (
    <>
      <StyledImg src={JadePhoto} />
      <div>
        <StyledSmall>Photo Credit:
        <a style={{ textDecoration: 'none', color: mainTeal }} href='http://ajpatell.com/' target='_blank'> AJ Patell</a>
        </StyledSmall>
      </div>
    </>
  )
}

export default JadesPhoto;