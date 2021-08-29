import Contact from "../Contact/Contact";
import propTypes from "prop-types";
import style from "./ContactList.module.css";

function ContactList({ contacts, deleteContactFromList }) {
  return (
    <ul className={style.list}>
      {contacts.map((contact) => {
        return (
          <Contact
            contact={contact}
            key={contact.id}
            deleteContactFromList={deleteContactFromList}
          />
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string,
      number: propTypes.string,
    })
  ),
  deleteContactFromList: propTypes.func,
};

export default ContactList;
