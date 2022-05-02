import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    const { contacts } = this.state;

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.map(contactItem => {
      if (contactItem.name === contact.name) {
        return alert(`${contact.name} is already in contacts`);
      }
      return contactItem;
    });

    this.setState(({ contacts }) => {
      return {
        contacts: [contact, ...contacts],
      };
    });
  };

  deleteContact = deleteId => {
    this.setState(({ contacts }) => {
      return {
        contacts: contacts.filter(({ id }) => id !== deleteId),
      };
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const { addContact, deleteContact, filterContacts, changeFilter } = this;
    const visibleContacts = filterContacts();
    return (
      <Container>
        <ContactForm addContact={addContact} />
        <Filter filter={filter} changeFilter={changeFilter} />
        <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
      </Container>
    );
  }
}
