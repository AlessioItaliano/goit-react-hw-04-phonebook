import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  AddContactForm,
  AddContactFormLabel,
  AddContactFormInput,
  AddContactFormBtn,
} from './ContactForm.styled';

const AddContact = ({ handleSubmit }) => {
  const [userName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setUserName(value);
    } else if (name === 'number') {
      setUserNumber(value);
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    handleSubmit({ name: userName, number: userNumber });
    setUserName('');
    setUserNumber('');
  };

  return (
    <AddContactForm onSubmit={onSubmit}>
      <AddContactFormLabel>Name</AddContactFormLabel>
      <AddContactFormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
        value={userName}
      />
      <AddContactFormLabel>Number</AddContactFormLabel>
      <AddContactFormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={userNumber}
      />
      <AddContactFormBtn type="submit">Add contact</AddContactFormBtn>
    </AddContactForm>
  );
};

AddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddContact;
