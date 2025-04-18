import React from 'react'

function App() {
	return (
		<form action="api/onboarding">
			<div>
				<label htmlFor="usernameInput">Username:</label>
				<input id="usernameInput" name="username" />
			</div>
			<button type="submit">Submit</button>
		</form>
	)
}

export default App

