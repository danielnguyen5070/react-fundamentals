import React from "react"

type OperationFn = (left: number, right: number) => number

const operations = {
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
} satisfies Record<string, OperationFn>

type CalculatorProps = {
	left?: number
	operator?: keyof typeof operations
	right?: number
}

function Calculator({ left = 0, operator = '+', right = 0 }: CalculatorProps) {
	const result = operations[operator](left, right)

	return (
		<div className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm mx-auto my-4 border border-gray-200">
			<code className="text-lg text-gray-800 font-mono">
				{left} <span className="text-blue-600">{operator}</span> {right} ={" "}
				<output className="font-semibold text-green-600">{result}</output>
			</code>
		</div>
	)
}

function App() {
	return (
		<div className="min-h-screen bg-gray-100 py-10 px-4">
			<h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
				Calculator
			</h1>
			<Calculator left={1} right={2} />
			<Calculator operator="-" />
			<Calculator left={1} operator="*" />
			<Calculator operator="/" right={2} />
		</div>
	)
}

export default App
