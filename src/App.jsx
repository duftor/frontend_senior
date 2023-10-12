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

	box-sizing: border-box;
	padding: 40px;
`
