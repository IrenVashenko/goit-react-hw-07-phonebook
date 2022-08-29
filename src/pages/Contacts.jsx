import {useFetchContanctsQuery, useDeleteContatctMutation} from '../redux/contacts/contact';
import ContactList from '../components/ContactList/ContactList'

export const PhoneBook = ({value}) => {
    const {isFetching} = useFetchContanctsQuery();
    const [deleteContact, {isLoading: isDeleting}] = useDeleteContatctMutation();
   
    return <div>
        {isFetching && <p>Loading...</p>}
        {value && !isFetching && (
            <ContactList contacts={value} onDelete={deleteContact} deleting={isDeleting}/>
        )}
    </div>
}