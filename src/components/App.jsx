import { Component } from 'react';
import { nanoid } from 'nanoid';

import AddContact from 'components/ContactForm';
import ContactList from 'components/contactList';
import ContactsFilter from './contactsFilter/ContactsFilter';

import { Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactBook = JSON.parse(contacts);
    if (contactBook) {
      this.setState({ contacts: contactBook });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleSubmit = ({ name, number }) => {
    const isExist = this.state.contacts.find(
      contact => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      window.alert(`${name} is alredy in contacts.`);
      return;
    }
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id: nanoid(), name, number }],
      };
    });
  };

  filterSerchContacts = e => {
    const { value } = e.currentTarget;

    this.setState({ filter: value.toLowerCase() });
  };

  filteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <Title>Phonebook</Title>
        <AddContact handleSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <ContactsFilter filterSerchContacts={this.filterSerchContacts} />
        <ContactList
          filteredContacts={this.filteredContacts()}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
