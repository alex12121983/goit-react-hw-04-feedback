import React from 'react'
import css from './Notification.module.css';
import PropTypes from "prop-types";

const Notification = ({message}) => {
	return (
		<>
            <h3 className={css.notification}>{message}</h3>
        </>
	)
}

export default Notification

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };