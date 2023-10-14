import styled from "styled-components"
import Calendar from "./components/Calendar"
import Event from "./components/Event"
import data from "./data/input.json"
import { useState } from "react"
import { timeStringToDecimal } from "./utils/time"

// Convert {start, duration} to {start, end}
const convertEventIntoInterval = (event) => {
	const start = timeStringToDecimal(event.start)
	return {
		id: event.id,
		start,
		end: start + event.duration / 60,
	}
}

// Check if interval1 and interval2 overlaps
const isOverlapping = (interval1, interval2) => {
	const start = Math.max(interval1.start, interval2.start)
	const end = Math.min(interval1.end, interval2.end)
	return start < end
}

// Sorts by start ascending
const sortIntervalsByStart = (intervals) => {
	return intervals.slice().sort(({ start: s1 }, { start: s2 }) => s1 - s2)
}

function App() {
	const [events, setEvents] = useState(data)
	const intervals = []

	// Converts all events into interval
	events.forEach((e) => intervals.push(convertEventIntoInterval(e)))

	console.log(sortIntervalsByStart(intervals))

	return (
		<AppStyled>
			{/* <Calendar /> */}
			{events.map(({ id, duration, start }) => (
				<Event
					key={id}
					id={id}
					duration={duration}
					start={start}
					// width={eventWidths[id]}
					// left={eventLeftValues[id]}
				/>
			))}
		</AppStyled>
	)
}

export default App

const AppStyled = styled.div`
	position: relative;
	/* background-color: #f7f7f7; */
	background-color: #ffffff;
	width: 100vw;
	height: 100vh;

	box-sizing: border-box;
	/* padding: 40px; */
`
