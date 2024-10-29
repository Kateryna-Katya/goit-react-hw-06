import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import style from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice/contactsSlice.js";
import { selectNameFilter } from "../../redux/filtersSlice/filtersSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={style.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
export default ContactList;
