import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 80%;
  text-align: center;
  vertical-align: middle;
  margin-left: 10%;
  font-style: 'Times New Roman', Times, serif;
`;

const SummaryBlock = () => {
  return (
    <>
      <StyledDiv> Before software engineering, I built thriving communities who shared
          a passion for inspiring a generation of self-directed learners.
          After seeing our technology move their motivation, I knew I wanted to take the leap into software engineering.
      </StyledDiv>
    </>
  )
}

export default SummaryBlock;