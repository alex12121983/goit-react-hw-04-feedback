import { Component } from 'react'
import css from './Statistics.module.css';
import PropTypes from "prop-types";

class Statistics extends Component {
    countTotalFeedback = (good, neutral, bad) => {
		return (good + neutral + bad)
	}
    positivePercentage = (good, neutral, bad) => {
		return Math.floor((good / (good + neutral + bad)) * 100)
	}
    render(){
        const {good, neutral, bad} = this.props
        return (
            <ul className={css.list}>
                <li className={css.item}>
                   <span>Good: {good}</span>
                </li>
                <li className={css.item}>
                    <span>Neutral: {neutral}</span>
                </li>
                <li className={css.item}>
                    <span>Bad: {bad}</span> 
                </li>
                <li className={css.item}>
                    <span>Total: {this.countTotalFeedback(good, neutral, bad)}</span>
                </li>
                <li className={css.item}>
                    <span>Positive feedback: {this.positivePercentage(good, neutral, bad)} %</span> 
                </li>
            </ul>
        )
    }
}
export default Statistics

Statistics.propTypes = {
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
  };