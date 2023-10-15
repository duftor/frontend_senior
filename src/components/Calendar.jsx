import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { decimalToTime, generateHours } from "../utils/time"
import { useState } from "react"
import data from "../data/input.json"
import EventsContainer from "./EventsContainer"

export default function Calendar() {
	const [events, setEvents] = useState(data)
	const hours = generateHours(9, 21)

	return (
		<CalendarStyled>
			<Typo className="header" variant="h3">
				Test recrutement : Calendar
			</Typo>
			<div className="container">
				<div className="time-scale">
					{hours.map((hour) => (
						<div key={hour} className="hour">
							{decimalToTime(hour % 12)} {hour < 12 ? "am" : "pm"}
						</div>
					))}
				</div>
				<div className="days-container"></div>
			</div>

			{/* <div className="container">
				<div className="time-scale">
					{hours.map((hour) => (
						<div key={hour} className="hour">
							{decimalToTime(hour % 12)} {hour < 12 ? "am" : "pm"}
						</div>
					))}
				</div>
				<div className="calendar">
					<div className="day">
						<Typo variant="body1">Lundi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Mardi</Typo>
						<EventsContainer
							events={events}
							containingInterval={{ start: 9, end: 21 }}
						/>
					</div>
					<div className="day">
						<Typo variant="body1">Mercredi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Jeudi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Vendredi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Samedi</Typo>
					</div>
					<div className="day">
						<Typo variant="body1">Dimanche</Typo>
					</div>
				</div>
			</div> */}
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

	.header {
		padding-top: 12px;
		display: flex;
		justify-content: center;
	}

	.container {
		border: 1px solid red;
		height: 100%;
		display: flex;

		.time-scale {
			border: 1px solid blue;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding-top: 36px;

			.hour {
				text-align: right;
				padding-right: 5px;
			}
		}
		.days-container {
			background: lightcoral;
			flex: 1;
		}
	}

	/* .container {
		display: flex;
		padding: 24px 24px 24px 0;

		flex: 1 1 auto;
	} */

	/* .time-scale {
		display: flex;
		flex-direction: column;

		background: blue;
		flex: 0 1 auto;
		text-align: right;
		justify-content: space-between;
		padding: 12px;

		.hour {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: right;
			padding-top: 12px;
		}
	}

	.calendar {
		display: flex;
		flex: 1 1 auto;

		justify-content: space-between;
		gap: 12px;

		.day {
			position: relative;
			border: 1px solid black;
			flex: 1;
			width: 100%;
			height: 100%;
		}
	} */
`
