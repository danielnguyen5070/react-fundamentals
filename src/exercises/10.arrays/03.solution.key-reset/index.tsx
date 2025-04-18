import { useState } from 'react'

function App() {
	const [key, setKey] = useState(0)
	return (
		<div>
			<input key={key} />
			<button onClick={() => setKey(key => key + 1)}>Reset</button>
		</div>
	)
}

export default App
