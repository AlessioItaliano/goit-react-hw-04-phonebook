import PropTypes from 'prop-types';
import {
  ContactListUl,
  ContactItem,
  ContactDeleteButton,
} from './ContactList.styled';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ContactListUl>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id}>
          {contact.name}:{contact.number}
          <ContactDeleteButton
            type="button"
            onClick={() => deleteContact(contact.id)}
          >
            Delete
          </ContactDeleteButton>
        </ContactItem>
      ))}
    </ContactListUl>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
