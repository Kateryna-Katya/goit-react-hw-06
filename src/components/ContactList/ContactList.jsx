import { useSelector } from "react-redux";
import Contact from "../Contact/Contact.jsx";
import style from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice/contactsSlice.js";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} />
      ))}
    </ul>
  );
};
export default ContactList;
