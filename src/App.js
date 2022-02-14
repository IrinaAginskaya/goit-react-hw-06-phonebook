import Form from './componenets/Form/Form';
import ContactList from './componenets/ContactList/ContactList';
import Filter from './componenets/Filter/Filter';
import { Container } from './App.styled';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
