import React from 'react';
import styled from 'styled-components';
import { ContactItem } from './contact-item';
import { Searchbar } from './searchbar';

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactsList = () => {
  return (
    <Wrapper>
      <Searchbar />
      <List>
        <ContactItem isChecked={true} />
        <ContactItem />
      </List>
    </Wrapper>
  );
};
