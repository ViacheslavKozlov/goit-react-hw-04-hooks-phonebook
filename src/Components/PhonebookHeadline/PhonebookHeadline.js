import React from "react";
import PropTypes from "prop-types";
import style from "./PhonebookHeadline.module.css";

const PhonebookHeadline = ({ title }) => {
  return <h3 className={style.phonebookHeadline}>{title}</h3>;
};

PhonebookHeadline.propTypes = {
  title: PropTypes.string.isRequired
};

export default PhonebookHeadline;
