import css from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, countTotalFeedback, positivePercentage }) => {
    console.log('good:' + good)
    // const countTotalFeedback = (good, neutral, bad) => {
	// 	return (good + neutral + bad)
	// }

    // const positivePercentage = (good, neutral, bad) => {
	// 	return Math.floor((good / (good + neutral + bad)) * 100)
	// }

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
                    <span>Total: {countTotalFeedback}</span>
                </li>
                <li className={css.item}>
                    <span>Positive feedback: {positivePercentage} %</span> 
                </li>
            </ul>
        )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };