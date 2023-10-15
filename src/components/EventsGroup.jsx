import React from "react"
import styled from "styled-components"
import Event from "./Event"

// Check if interval1 and interval2 overlaps
const isOverlapping = (interval1, interval2) => {
	const start = Math.max(interval1.start, interval2.start)
	const end = Math.min(interval1.end, interval2.end)
	return start < end
}

// Fill columns with equal width from left to right
const putIntervalsIntoColumns = (intervals) => {
	const columns = []
	for (const interval of intervals) {
		let columnIndex = findFreeColumn(interval)
		columns[columnIndex] = (columns[columnIndex] || []).concat([interval])
	}
	return columns

	function findFreeColumn(interval) {
		let columnIndex = 0
		while (
			columns?.[columnIndex]?.some((otherInterval) =>
				isOverlapping(interval, otherInterval)
			)
		) {
			columnIndex++
		}
		return columnIndex
	}
}

// Expand columns maximally.
function makeBoxes(columns, containingInterval) {
	const boxes = []
	for (let columnIndex = 0; columnIndex < columns.length; columnIndex++) {
		for (const interval of columns[columnIndex]) {
			const columnSpan = findColumnSpan(columnIndex, interval)
			const box = {
				...interval,
				top:
					((interval.start - containingInterval.start) /
						(containingInterval.end - containingInterval.start)) *
					100,
				height:
					((interval.end - interval.start) /
						(containingInterval.end - containingInterval.start)) *
					100,
				left: (columnIndex / columns.length) * 100,
				width: (columnSpan / columns.length) * 100,
			}
			boxes.push(box)
		}
	}
	return boxes

	function findColumnSpan(columnIndex, interval) {
		let columnSpan = 1
		while (
			columns?.[columnIndex + columnSpan]?.every(
				(otherInterval) => !isOverlapping(interval, otherInterval)
			)
		) {
			columnSpan++
		}
		return columnSpan
	}
}

export default function EventsGroup({
	events,
	groupColors,
	containingInterval,
}) {
	const columns = putIntervalsIntoColumns(events)

	const boxes = makeBoxes(columns, containingInterval)

	return (
		<EventsGroupStyled>
			{boxes.map(({ id, top, left, height, width }) => (
				<Event
					key={id}
					id={id}
					colors={groupColors}
					top={top}
					left={left}
					height={height}
					width={width}
				/>
			))}
		</EventsGroupStyled>
	)
}

const EventsGroupStyled = styled.div``
