import React from "react";
import PropTypes from "prop-types";
import style from "./PhonebookList.module.css";

const PhonebookList = ({ contacts, onDeleteContact }) => {
  return (
    <>
      <ul className={style.listWrapper}>
        {contacts.map(contact => (
          <li className={style.listItem} key={contact.id}>
            <span className={style.listItemdData}>
              {contact.name}: <a href="tel:+{contact.number}">{contact.number}</a>
            </span>
            <button className={style.listItemBtn} type="button" onClick={() => onDeleteContact(contact.id)}>
              delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

PhonebookList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  onDeleteContact: PropTypes.func.isRequired
};
export default PhonebookList;
