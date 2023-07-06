import PropTypes from 'prop-types';

import {
  ContactsFilterForm,
  ContactsFilterLabel,
  ContactsFilterInput,
} from './ContactsFilter.styled';

const ContactsFilter = ({ filterSerchContacts }) => {
  return (
    <ContactsFilterForm>
      <ContactsFilterLabel>Find contact by name</ContactsFilterLabel>
      <ContactsFilterInput
        type="text"
        name="filter"
        onChange={filterSerchContacts}
      />
    </ContactsFilterForm>
  );
};

ContactsFilter.propTypes = {
  filterSerchContacts: PropTypes.func.isRequired,
};

export default ContactsFilter;
