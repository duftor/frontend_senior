import styled from "styled-components"
import Calendar from "./components/Calendar"
import data from "./data/input.json"
import { useState } from "react"
import EventsContainer from "./components/EventsContainer"

function App() {
	const [events, setEvents] = useState(data)

	return (
		<AppStyled>
			{/* <Calendar /> */}
			<EventsContainer
				events={events}
				containingInterval={{ start: 0, end: 24 }}
			/>
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
