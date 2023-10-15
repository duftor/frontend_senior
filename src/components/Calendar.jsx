import React from "react"
import styled from "styled-components"
import Typo from "./reusable-ui/Typo"
import { decimalToTime, generateHours } from "../utils/time"
import { useState } from "react"
import data from "../data/input.json"
import EventsContainer from "./EventsContainer"
import { generateEvents } from "../utils/intervals"

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
