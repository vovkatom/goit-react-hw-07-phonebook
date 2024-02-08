import { Container } from './App.styled';
import ContactForm from './ContactsForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Title from './Title';
import { useSelector } from 'react-redux';

import { selectOperetion } from 'redux/selectors';


import { RotatingLines } from 'react-loader-spinner';

const App = () => {
  const operetion = useSelector(selectOperetion);

  return (
    <Container>
      <Title title='Phonebook'></Title>
      <ContactForm />
      <div>
        <Title title='Contacts'></Title>
        <Filter />
        {operetion === 'fatch' && <RotatingLines />}
        <ContactList />
      </div>
    </Container>
  );
};

export default App;
