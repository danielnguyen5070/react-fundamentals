import React from "react"

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			{/* add appropriate inputs for:
				- password
				- age (accepting numbers from 0 to 200)
				- photo (restricts the input to only accept image files)
				- color
				- startDate
			 */}
			<button type="submit">Submit</button>
		</form>
	)
}

export default App
