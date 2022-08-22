import React from 'react';
import styled, { keyframes } from 'styled-components';

const breatheAnimation = keyframes`
 0% { transform: rotate(0deg) }
 100% { transform: rotate(360deg) }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Square = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid #b4b4b4;
  animation-name: ${breatheAnimation};
  animation-duration: 4s;
  animation-iteration-count: infinite;
`;

export const LoadingScreen = () => {
  return (
    <Wrapper>
      <Square />
    </Wrapper>
  );
};
