import React from 'react'
import css from './Section.module.css';
import PropTypes from "prop-types";

const Section = ({children, title}) => {
	return (
		<div className={css.container}>
            <h2>{title}</h2>
            {children}
        </div>
	)
}

export default Section

Section.propTypes = {
    title: PropTypes.string.isRequired,
  };