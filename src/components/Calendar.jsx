import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"

export default function Calendar() {
	return (
		<CalendarStyled>
			<Typo className="title" variant="h3">
				Test recrutement : Calendar
			</Typo>
			<div className="calendar">
				<div className="day">Lundi</div>
				<div className="day">Mardin</div>
				<div className="day">Mercredi</div>
				<div className="day">Jeudi</div>
				<div className="day">Vendredi</div>
				<div className="day">Samedi</div>
				<div className="day">Dimanche</div>
			</div>
		</CalendarStyled>
	)
}

const CalendarStyled = styled.div`
	display: flex;
	flex-flow: column;

	background-color: white;
	width: 100%;
	height: 100%;

	border-radius: 4px;
	box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);

	.title {
		padding-top: 12px;
		display: flex;
		justify-content: center;
	}

	.calendar {
		display: flex;
		flex: 1 1 auto;

		justify-content: space-between;
		padding: 24px;
		gap: 12px;

		.day {
			flex: auto;
			background: red;
			display: flex;
			text-align: center;
			justify-content: center;
		}
	}
`
