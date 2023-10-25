import React from "react"
import EventsGroup from "./EventsGroup"
import styled from "styled-components"
import { convertEventIntoInterval, groupIntervals } from "../utils/intervals"
import { colors } from "./theme"

export default function EventsContainer({ events, containingInterval }) {
	const intervals = []

	// Converts all events into interval
	events.forEach((e) => intervals.push(convertEventIntoInterval(e)))
	const groups = groupIntervals(intervals)

	return (
		<EventsContainerStyled>
			{groups.map((events, groupIndex) => {
				return (
					<EventsGroup
						key={groupIndex}
						events={events}
						groupColors={colors[groupIndex % 10]}
						containingInterval={containingInterval}
					/>
				)
			})}
		</EventsContainerStyled>
	)
}

const EventsContainerStyled = styled.div`
	position: absolute;
	height: 100%;
	width: 100%;
`
