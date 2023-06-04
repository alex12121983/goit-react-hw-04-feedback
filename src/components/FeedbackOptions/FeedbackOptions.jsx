import React from 'react'
import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <div className={css.buttons}>
        {options.map((option) => {
           return (
                    <button 
                        name={option}
                        key={option}
                        type="button" 
                        className={css.btn} 
                        onClick={onLeaveFeedback}
                    >
                        {option}
                    </button>)
        })}
    </div>)
}

export default FeedbackOptions

  FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };