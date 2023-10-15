import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { decimalToTime, generateHours } from "../utils/time"
import { useState } from "react"
import data from "../data/input.json"
import EventsContainer from "./EventsContainer"
import { generateEvents } from "../utils/intervals"

const daysFR = [
	"Lundi",
	"Mardi",
	"Mercredi",
	"Jeudi",
	"Vendredi",
	"Samedi",
	"Dimanche",
]

export default function Calendar({ is24HourFormat = true }) {
	const [events, setEvents] = useState(data)
	const containingInterval = { start: 9, end: 21 }
	const hours = generateHours(containingInterval.start, containingInterval.end)

	const eventsProperties = {
		count: 17, // Intervals to generate
		maxStart: 9, // Start hour
		maxEnd: 21, // End hour
		minLength: 15, // Interval min length (minutes)
		maxLength: 120, // Interval max length (minutes)
		segments: 4, // Hour divider for events' hour
	}

	return (
		<CalendarStyled>
			<Typo className="header" variant="h3">
				Test recrutement : Calendar
			</Typo>
			<div className="container">
				<div className="days-header">
					{daysFR.map((day) => (
						<div key={day + "-header"} className="day-header">
							<Typo variant="h6">{day}</Typo>
						</div>
					))}
				</div>
				<div className="calendar">
					<div className="time-scale">
						{hours.map((hour) => (
							<Typo key={hour} className="scale-hour">
								{is24HourFormat
									? `${decimalToTime(hour)}`
									: `${decimalToTime(hour % 12)} ${hour < 12 ? "am" : "pm"}`}
							</Typo>
						))}
					</div>
					<div className="calendar-days">
						{daysFR.map((day) => (
							<div key={day + "-content"} className="day-content">
								<EventsContainer
									events={
										day === daysFR[0]
											? events
											: generateEvents(eventsProperties)
									}
									containingInterval={containingInterval}
								/>
							</div>
						))}
					</div>
				</div>
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

	.header {
		padding-top: 12px;
		display: flex;
		justify-content: center;
	}

	.container {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 12px;

		.days-header {
			display: flex;
			justify-content: space-between;
			padding-left: 57.244px;
			gap: 12px;

			.day-header {
				flex: 1;
				text-align: center;
			}
		}

		.calendar {
			display: flex;
			flex: 1;

			.time-scale {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.scale-hour {
					text-align: right;
					padding-right: 12px;
				}
			}

			.calendar-days {
				flex: 1;
				display: flex;
				justify-content: space-between;
				gap: 12px;

				.day-content {
					flex: 1;
					position: relative;
				}
			}
		}
	}
`
