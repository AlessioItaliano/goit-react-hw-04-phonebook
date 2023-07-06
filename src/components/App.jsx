import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import AddContact from 'components/ContactForm';
import ContactList from 'components/contactList';
import ContactsFilter from './contactsFilter/ContactsFilter';

import { Title } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const contactBook = JSON.parse(localContacts);
    if (contactBook) {
      setContacts(contactBook);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = ({ name, number }) => {
    const isExist = contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      window.alert(`${name} is alredy in contacts.`);
      return;
    }
    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), name, number },
    ]);
  };

  const filterSerchContacts = e => {
    const { value } = e.currentTarget;
    setFilter(value.toLowerCase());
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  return (
    <>
      <Title>Phonebook</Title>
      <AddContact handleSubmit={handleSubmit} />
      <Title>Contacts</Title>
      <ContactsFilter filterSerchContacts={filterSerchContacts} />
      <ContactList
        filteredContacts={filteredContacts}
        deleteContact={deleteContact}
      />
    </>
  );
};

export default App;
