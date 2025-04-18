import { createRoot } from 'react-dom/client'
import React from 'react'
const operations = {
	'+': (left: number, right: number): number => left + right,
	'-': (left: number, right: number): number => left - right,
	'*': (left: number, right: number): number => left * right,
	'/': (left: number, right: number): number => left / right,
}

// 🦺 create a type called CalculatorProps

// 🦺 set the type for this props argument to CalculatorProps
function Calculator({ left, operator, right }) {
	const result = operations[operator](left, right)
	return (
		<div>
			<code>
				{left} {operator} {right} = <output>{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div>
			<h1>Calculator</h1>
			<Calculator left={1} operator="+" right={2} />
			<Calculator left={1} operator="-" right={2} />
			<Calculator left={1} operator="*" right={2} />
			<Calculator left={1} operator="/" right={2} />
		</div>
	)
}

export default App
