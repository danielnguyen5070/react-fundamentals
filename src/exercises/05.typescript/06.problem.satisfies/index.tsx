import React from "react"

type OperationFn = (left: number, right: number) => number
// 💣 delete the Operator type
type Operator = '+' | '-' | '/' | '*'
// 🦺 remove the type cast
const operations: Record<Operator, OperationFn> = {
	'+': (left, right) => left + right,
	'-': (left, right) => left - right,
	'*': (left, right) => left * right,
	'/': (left, right) => left / right,
}
// add "satisfies" here to ensure operations satisfies a Record with string keys and OperationFn values

type CalculatorProps = {
	left?: number
	operator?: keyof typeof operations
	right?: number
}
function Calculator({ left = 0, operator = '+', right = 0 }: CalculatorProps) {
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
			<Calculator left={1} right={2} />
			<Calculator operator="-" />
			<Calculator left={1} operator="*" />
			<Calculator operator="/" right={2} />
		</div>
	)
}

export default App
