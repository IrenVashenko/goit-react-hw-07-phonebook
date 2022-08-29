import { ContactsList, ContactItem, ContactBtn } from './ContactList.styled';
import { nanoid } from 'nanoid'

const ContactList = ({ contacts, onDelete, deleting }) => {
    return (
        <ContactsList>
            {contacts?.map((contact) => (
                    <ContactItem key={nanoid()}>
                        <span>{contact.name}: </span>
                        <span>{contact.phone}</span>
                        <ContactBtn type="button"  onClick={() => onDelete(contact.id)}>
                            {deleting ? 'Deleting...': 'Delete'}
                        </ContactBtn>
                    </ContactItem>
            ))}
        </ContactsList>
    )
}
export default ContactList;
