import css from './Statistics.module.css';
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, countTotalFeedback, positivePercentage }) => {

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
    countTotalFeedback: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
  };