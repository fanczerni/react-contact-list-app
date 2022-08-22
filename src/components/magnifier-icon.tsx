import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  transform: rotate(45deg);
  position: absolute;
  left: 15px;
`;

const Circle = styled.div`
  width: 15px;
  height: 15px;
  border: 2px solid #b4b4b4;
  border-radius: 50%;
`;

const Hand = styled.div`
  width: 10px;
  height: 3px;
  background-color: #b4b4b4;
  right: 0;
  margin-left: -1px;
`;

export const MagnifierIcon = () => {
  return (
    <Wrapper>
      <Circle />
      <Hand />
    </Wrapper>
  );
};
