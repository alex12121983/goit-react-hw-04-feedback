import { useState } from 'react'
import Section from './Section/Section'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Statistics from './Statistics/Statistics'
import Notification from './Notification/Notification'

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)


	const onLeaveFeedback = ({target: {name}}) => {
		switch (name) {
			case 'good':
				setGood((prev) => prev + 1)
				console.log('good' + good) 
				break;
			case 'neutral':
				setNeutral((prev) => prev + 1)
				console.log('neutral' + neutral)
				break;
			case 'bad':
				setBad((prev) => prev + 1)
				console.log('bad' + bad) 
				break;
			default:
				break;
		}
	}

	const countTotalFeedback = () => {
		return (good + neutral + bad)
	}

    const positivePercentage = () => {
		return Math.floor((good / (good + neutral + bad)) * 100)
	}

	return (
			<>
				 <Section title={'Please leave feedback'}>
				 	<FeedbackOptions 
						options={Object.keys({good, neutral, bad})} 
						onLeaveFeedback={onLeaveFeedback}
					/>
				 </Section>
				 <Section title={'Statistics'}>
					{countTotalFeedback ()   ? 
					(<Statistics 
						good={good} 
						neutral={neutral} 
						bad={bad}
						countTotalFeedback={countTotalFeedback()}
						positivePercentage={positivePercentage()}
					/>) 
					: (<Notification  message={'There is no feedback'}/>)}
				 </Section>
			</>
	)
}

export default App
