import React from 'react';
import styled from 'styled-components';
import { MagnifierIcon } from './magnifier-icon';

const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  padding-left: 70px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 15px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const Searchbar = () => {
  return (
    <Wrapper>
      <MagnifierIcon />
      <Input type='search' id='site-search' name='q' placeholder='i.e. Michał Żurawski' />
    </Wrapper>
  );
};
