import PropTypes from 'prop-types';
import {
  ContactListContainer,
  ContactListItemBlock,
  ContactItemText,
  Button,
} from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListContainer>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItemBlock key={id}>
            <ContactItemText>
              {name}: {number}
            </ContactItemText>
            <Button type="button" onClick={() => deleteContact(id)}>
              Delete
            </Button>
          </ContactListItemBlock>
        );
      })}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
