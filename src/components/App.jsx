import Container from './Container';
import { ContactFormed } from './Form/ContactForm';
import Filter from './Filter/Filter';
import { PhoneBook } from 'pages/Contacts';
import { useState } from 'react';
import {useFetchContanctsQuery} from '../redux/contacts/contact';

export default function App() {
  const [filter, setState] = useState('');
  const {data: contacts} = useFetchContanctsQuery();

  const handlerFilter = (e) => {
    setState(e.target.value)
  }

  const filteredPlanets = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter) || contact.name.toUpperCase().includes(filter))

  return (
    <>
      <Container>
        <h2>Phonebook</h2>
        <ContactFormed/>

        <h2>Contacts</h2>
        <Filter
          value={filter}
          onChange={handlerFilter}
        />
        <PhoneBook value={filteredPlanets}/>
      </Container>
    </>
  )
}