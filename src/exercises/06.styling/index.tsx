import React from "react"
import "./index.css"

const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>
const sizelessColorlessBox = <div>sizeless colorless box</div>

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-6">
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

export default App
