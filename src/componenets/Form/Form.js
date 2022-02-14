import { useState } from 'react';
// import PropTypes from 'prop-types';
import { FormTitle } from './Form.styled';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/actions';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleForm = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const onSubmit = () => {
    dispatch(actions.addContact(name, number));
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === name)) {
      alert(`We have already have ${name}`);
      setName('');
      setNumber('');
      return;
    }
    onSubmit(name, number);
    setName('');
    setNumber('');
  };

  return (
    <FormTitle onSubmit={handleSubmit} contacts={contacts}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleForm}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleForm}
        />
      </label>
      <button type="submit">Add contact</button>
    </FormTitle>
  );
}
