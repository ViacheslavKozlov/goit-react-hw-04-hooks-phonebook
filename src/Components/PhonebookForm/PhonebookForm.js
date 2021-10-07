import { useState } from "react";
import style from "./PhonebookForm.module.css";
import PropTypes from "prop-types";

export default function PhonebookForm({ onSubmit }) {
  // eslint-disable-next-line no-unused-vars
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setId("");
    setName("");
    setNumber("");
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  return (
    <form className={style.formWarpper} onSubmit={handleSubmit}>
      <div className={style.formInputWarpper}>
        <label className={style.lableName} htmlFor="name">
          Name
          <input
            className={style.inputField}
            type="text"
            name="name"
            value={name}
            autoComplete="off"
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
      </div>
      <div className={style.formInputWarpper}>
        <label className={style.lableName} htmlFor="number">
          Number
          <input
            className={style.inputField}
            type="tel"
            name="number"
            value={number}
            autoComplete="off"
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
      </div>
      <button className={style.formBtn} type="submit">
        Add contact to phonebook
      </button>
    </form>
  );
}

PhonebookForm.defaultPops = {
  id: "",
  name: "",
  number: ""
};

PhonebookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};
