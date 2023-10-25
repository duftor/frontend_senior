import React from "react"
import styled, { css } from "styled-components"

export default function Typo({
	className,
	variant = "body1",
	color = "black",
	children,
}) {
	return (
		<TypoStyled className={className} variant={variant} color={color}>
			{children}
		</TypoStyled>
	)
}

const TypoStyled = styled.div`
	font-family: "Roboto", sans-serif;
	color: ${({ color }) => color.light};

	${({ variant }) => typoStyle[variant]}
`

const h1 = css`
	font-weight: 300;
	font-size: 6rem;
	line-height: 1.167;
	letter-spacing: -0.01562em;
`

const h2 = css`
	font-weight: 300;
	font-size: 3.75rem;
	line-height: 1.2;
	letter-spacing: -0.00833em;
`
const h3 = css`
	font-weight: 400;
	font-size: 3rem;
	line-height: 1.167;
	letter-spacing: 0em;
`
const h4 = css`
	font-weight: 400;
	font-size: 2.125rem;
	line-height: 1.235;
	letter-spacing: 0.00735em;
`
const h5 = css`
	font-weight: 400;
	font-size: 1.5rem;
	line-height: 1.334;
	letter-spacing: 0em;
`

const h6 = css`
	font-weight: 500;
	font-size: 1.25rem;
	line-height: 1.6;
	letter-spacing: 0.0075em;
`

const body1 = css`
	font-weight: 400;
	font-size: 1rem;
	line-height: 1.5;
	letter-spacing: 0.00938em;
`
const body2 = css`
	font-weight: 400;
	font-size: 0.875rem;
	line-height: 1.43;
	letter-spacing: 0.01071em;
`

const typoStyle = {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	body1,
	body2,
}
