import { ContactBtn } from './ContactForm.styled'
import { Input, ContactForm } from './ContactForm.styled';
import {useCreateContactMutation} from '../../redux/contacts/contact';
import {useFetchContanctsQuery} from '../../redux/contacts/contact';

export const ContactFormed = () => {
    const {data: contacts} = useFetchContanctsQuery();
    const [createContact] = useCreateContactMutation();
  
    const handleSubmit = e => {
        e.preventDefault();
        let nameContact = e.currentTarget.elements.name.value;
        let phoneContact = e.currentTarget.elements.phone.value;
        const contactsNames = contacts?.map(contact => contact.name);
        if (contactsNames.includes(nameContact) && contacts !== undefined) {
            alert(` name is already in contacts.`);
        } else {
            createContact({ nameContact, phoneContact });
        }
        e.currentTarget.reset()
    }

    return (
        <ContactForm autoComplete='off' onSubmit={handleSubmit}>
            <div>Name</div>
            <Input type="text" name="name"/>
            <div>Number</div>
            <Input type="text" name="phone"/>
            <ContactBtn type='submit'>Add contact</ContactBtn>
        </ContactForm>
    )
}
