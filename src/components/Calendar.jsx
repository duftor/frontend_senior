import React from "react"
import styled from "styled-components"

export default function Calendar() {
	return <CalendarStyled></CalendarStyled>
}

const CalendarStyled = styled.div`
	background-color: white;
	width: 100%;
	height: 100%;

	border-radius: 4px;
	box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.05);
`
