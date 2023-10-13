import styled from "styled-components"
import Calendar from "./components/Calendar"
import Event from "./components/Event"
import data from "./data/input.json"
import { useState } from "react"

function App() {
	const [events, setEvents] = useState(data)

	const { id, duration, start } = events[1]
	return (
		<AppStyled>
			{/* <Calendar /> */}
			<Event id={id} duration={duration} start={start} />
		</AppStyled>
	)
}

export default App

const AppStyled = styled.div`
	/* background-color: #f7f7f7; */
	background-color: #ffffff;
	width: 100vw;
	height: 100vh;

	box-sizing: border-box;
	padding: 40px;
`
