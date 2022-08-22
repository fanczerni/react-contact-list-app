import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContactItem } from './contact-item';
import { Searchbar } from './searchbar';
import axios from 'axios';
import { LoadingScreen } from './loading-screen';

const Wrapper = styled.div``;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
        );
        setContacts(response);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      {loading && <LoadingScreen />}
      <Searchbar />
      <List>
        {contacts &&
          contacts.map(
            (contact: {
              id: number;
              first_name: string;
              last_name: string;
              email: string;
              avatar?: string;
            }) => (
              <ContactItem
                key={contact.id}
                isChecked={true}
                firstName={contact.first_name}
                lastName={contact.last_name}
                email={contact.email}
                avatarUrl={contact.avatar}
              />
            ),
          )}
      </List>
    </Wrapper>
  );
};
