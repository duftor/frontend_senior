import React from "react"
import styled from "styled-components"
import Event from "./Event"

export default function GroupEvents({ events, groupColors }) {
	return (
		<GroupEventsStyled>
			{events.map(({ id, end, start }) => (
				<Event
					key={id}
					id={id}
					end={end}
					start={start}
					colors={groupColors}
					// width={eventWidths[id]}
					// left={eventLeftValues[id]}
				/>
			))}
		</GroupEventsStyled>
	)
}

const GroupEventsStyled = styled.div``
