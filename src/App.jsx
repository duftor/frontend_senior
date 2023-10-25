import styled from "styled-components"
import Calendar from "./components/Calendar"

function App() {
	return (
		<AppStyled>
			<Calendar />
		</AppStyled>
	)
}

export default App

const AppStyled = styled.div`
	background-color: #f7f7f7;
	width: 100vw;
	height: 100vh;
	min-width: 700px;
	min-height: 430px;

	box-sizing: border-box;
	padding: 5vh 5vw;
`
