import PropTypes from 'prop-types';
import { Component } from 'react';
import {
  AddContactForm,
  AddContactFormLabel,
  AddContactFormInput,
  AddContactFormBtn,
} from './ContactForm.styled';

class AddContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <AddContactForm onSubmit={this.onSubmit}>
        <AddContactFormLabel>Name</AddContactFormLabel>
        <AddContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChange}
          value={this.state.name}
        />
        <AddContactFormLabel>Number</AddContactFormLabel>
        <AddContactFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChange}
          value={this.state.number}
        />
        <AddContactFormBtn type="submit">Add contact</AddContactFormBtn>
      </AddContactForm>
    );
  }
}

AddContact.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default AddContact;
