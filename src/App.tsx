import React from 'react';
import { PageLayout } from './components/page-layout';
import { ContactsList } from './components/contacts-list';

function App() {
  return (
    <div className='App'>
      <PageLayout title='Contacts'>
        <ContactsList />
      </PageLayout>
    </div>
  );
}

export default App;
