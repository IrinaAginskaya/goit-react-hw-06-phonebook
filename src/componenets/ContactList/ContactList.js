import React from 'react';
// import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    const { filter, items } = state.contacts;
    const normalizeFilter = filter.toLowerCase();
    const filteredContacts = items.filter(item =>
      item.name.toLowerCase().includes(normalizeFilter),
    );
    return filteredContacts;
  });
  const removeContact = id => dispatch(actions.deleteContact(id));

  return (
    <List>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name + ':' + contact.number}
          {
            <button type="button" name="delete" onClick={() => removeContact(contact.id)}>
              DELETE
            </button>
          }
        </li>
      ))}
    </List>
  );
};

export default ContactList;
