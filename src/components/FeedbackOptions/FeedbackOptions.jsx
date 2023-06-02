import React, { Component } from 'react'
import css from './FeedbackOptions.module.css';
import PropTypes from "prop-types";

class FeedbackOptions extends Component {
    render(){
        const { options, onLeaveFeedback } = this.props
        return (
            <div className={css.buttons}>
                {options.map((option, index) => {
                   return (
                            <button 
                                name={option}
                                key={index}
                                type="button" 
                                className={css.btn} 
                                onClick={onLeaveFeedback}
                            >
                                {option}
                            </button>)
                })}
            </div>
        )
    }
}

export default FeedbackOptions

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
      PropTypes.exact({
        option: PropTypes.string.isRequired,
      })
    ).isRequired,
  };