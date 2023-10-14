import styled from "styled-components"
import Calendar from "./components/Calendar"
import Event from "./components/Event"
import data from "./data/input.json"
import { useState } from "react"
import { timeStringToDecimal } from "./utils/time"

const convertEventIntoInterval = (event) => {
	const start = timeStringToDecimal(event.start)
	return {
		start,
		end: start + event.duration / 60,
	}
}

const isOverlapping = (interval1, interval2) => {
	const start = Math.max(interval1.start, interval2.start)
	const end = Math.min(interval1.end, interval2.end)
	return start < end
}

function App() {
	const [events, setEvents] = useState(data)

	const e1 = convertEventIntoInterval(events[15])
	const e2 = convertEventIntoInterval(events[13])

	console.log(isOverlapping(e1, e2))

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
