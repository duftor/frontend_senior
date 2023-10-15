import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { decimalToTime, generateHours } from "../utils/time"
import { useState } from "react"
import data from "../data/input.json"
import EventsContainer from "./EventsContainer"

// Generate events for testing
const generateEvents = ({
	count,
	maxStart,
	maxEnd,
	minLength,
	maxLength,
	segments,
}) => {
	const events = []

	for (let i = 1; i <= count; i++) events.push({ id: i, ...randomEvent() })

	return events

	function randomEvent() {
		const start = randomInt(maxStart * segments, maxEnd * segments) / segments
		let duration = randomInt(minLength, maxLength, 15)

		if (start + duration / 60 > maxEnd) duration = (maxEnd - start) * 60

		return {
			start: decimalToTime(start, ":"),
			duration,
		}
	}

	function randomInt(min, max, step = 1) {
		const range = (max - min) / step
		return Math.floor(Math.random() * range) * step + min
	}
}

export default function Calendar({ is24HourFormat = true }) {
	const [events, setEvents] = useState(data)
	const containingInterval = { start: 9, end: 21 }
	const hours = generateHours(containingInterval.start, containingInterval.end)

	const eventsProperties = {
		count: 17, // Nombre d'intervals à générer
		maxStart: 9, // Heure maximale de début (24 heures)
		maxEnd: 21, // Heure maximale de fin (24 heures)
		minLength: 15, // Durée minimale de l'intervalle (en minutes)
		maxLength: 120, // Durée maximale de l'intervalle (en minutes)
		segments: 4, // Nombre de segments pour la précision
	}

	return (
		<CalendarStyled>
			<Typo className="header" variant="h3">
				Test recrutement : Calendar
			</Typo>
			<div className="container">
				<div className="days-header">
					<div className="day-header">
						<Typo variant="h6">Lundi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Mardi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Mercredi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Jeudi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Vendredi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Samedi</Typo>
					</div>
					<div className="day-header">
						<Typo variant="h6">Dimanche</Typo>
					</div>
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
						<div className="day-content">
							<EventsContainer
								events={events}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
						<div className="day-content">
							<EventsContainer
								events={generateEvents(eventsProperties)}
								containingInterval={containingInterval}
							/>
						</div>
					</div>
				</div>
				{/* <div className="time-scale">
					{hours.map((hour) => (
						<Typo key={hour} className="hour">
							{is24HourFormat
								? `${decimalToTime(hour)}`
								: `${decimalToTime(hour % 12)} ${hour < 12 ? "am" : "pm"}`}
						</Typo>
					))}
				</div>
				<div className="days-container">
					<div className="day">
						<div className="day-header">
							<Typo variant="h6">Lundi</Typo>
						</div>
						<div className="day-content">
							<EventsContainer
								events={events}
								containingInterval={containingInterval}
							/>
						</div>
					</div>
					<div className="day">
						<div className="day-header">
							<Typo variant="h6">Mardi</Typo>
						</div>
						<div className="day-content"></div>
					</div>
				</div> */}
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

		/* .time-scale {
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
			border: 1px solid blue;
			flex: 1;
			display: flex;
			gap: 12px;

			.day {
				background: red;
				width: 100%;
				height: 100%;

				.day-header {
					padding: 4px;
					text-align: center;
				}

				.day-content {
					position: relative;
					height: 100%;
					flex: 1;
					height: 100%;
				}
			}
		} */
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
