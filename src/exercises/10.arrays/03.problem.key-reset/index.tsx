import React, { useState } from 'react'

function App() {
	const [key, setKey] = useState(0)
	return (
		<div>
			{/* 🐨 add a key prop to this input and set it to the key state */}
			<input />
			<button onClick={() => setKey(key => key + 1)}>Reset</button>
		</div>
	)
}

export default App
