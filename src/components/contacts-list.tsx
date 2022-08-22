import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ContactItem } from './contact-item';
import { Searchbar } from './searchbar';
import axios from 'axios';
import { LoadingScreen } from './loading-screen';

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContactsList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          'https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json',
        );
        response.sort((a: { last_name: string }, b: { last_name: string }) =>
          a.last_name.localeCompare(b.last_name),
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

  useEffect(() => {
    selectedIDs.length > 0 && console.log(selectedIDs);
  }, [selectedIDs]);

  const filteredData = contacts.filter((el: any) => {
    if (inputText === '') {
      return el;
    } else {
      return (el.first_name + ' ' + el.last_name).toLowerCase().includes(inputText);
    }
  });

  return (
    <div>
      {loading && <LoadingScreen />}
      <Searchbar setInputText={setInputText} />
      <List>
        {filteredData &&
          filteredData.map(
            (contact: {
              id: number;
              first_name: string;
              last_name: string;
              email: string;
              avatar?: string;
            }) => (
              <ContactItem
                id={contact.id}
                key={contact.id}
                firstName={contact.first_name}
                lastName={contact.last_name}
                email={contact.email}
                avatarUrl={contact.avatar}
                selectedIDs={selectedIDs}
                setSelectedIDs={setSelectedIDs}
              />
            ),
          )}
      </List>
    </div>
  );
};
