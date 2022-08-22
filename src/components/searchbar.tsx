import React, { useState, useEffect } from 'react';
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

export const Searchbar: React.FC<{ setInputText: any }> = ({ setInputText }) => {
  const inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <Wrapper>
      <MagnifierIcon />
      <Input
        type='search'
        name='contacts-search'
        placeholder='i.e. Michał Żurawski'
        onChange={inputHandler}
      />
    </Wrapper>
  );
};
