import { Input, ContactForm } from './Filter.styled';

const Filter = ({value, onChange}) => {
    return (
        <>
        <ContactForm>
            Find contacts by name
            <Input
                type="text"
                value={value}
                onChange={onChange}
            />
        </ContactForm>
        </>
    )
}
export default Filter;