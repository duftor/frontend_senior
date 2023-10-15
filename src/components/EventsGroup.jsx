import React from "react"
import Event from "./Event"
import { makeBoxes, putIntervalsIntoColumns } from "../utils/intervals"

export default function EventsGroup({
	events,
	groupColors,
	containingInterval,
}) {
	const columns = putIntervalsIntoColumns(events)

	const boxes = makeBoxes(columns, containingInterval)

	return (
		<div>
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
		</div>
	)
}
