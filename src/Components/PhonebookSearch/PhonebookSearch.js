import React from "react";
import PropTypes from "prop-types";
import style from "./PhonebookSearch.module.css";

const PhonebookSearch = ({ value, onChange }) => {
  return (
    <div className={style.formWarpper}>
      <label className={style.searchLabel}>
        Find contact by name
        <input
          className={style.inputField}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </div>
  );
};

PhonebookSearch.defaultPops = {
  value: ""
};

PhonebookSearch.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default PhonebookSearch;
