import React from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  padding: 10px;
  margin: 20px;
  display: inline-block;
  border-radius: 50%;
  width: 500px;
  height: 500px;
`;

const darkCircle = '#76B6C3';

const Bubble = (props: any) => {
  return (
    <>
      <StyledCircle
        style={{
          backgroundColor: props.bgColor || darkCircle,
          width: props.diameter || '500px',
          height: props.diameter || '500px',
          float: 'left'
        }}> {props.name}
      </StyledCircle>
    </>
  );
}

export default Bubble;
