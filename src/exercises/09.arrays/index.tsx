import React, { useEffect, useState } from 'react'

const fruits = [
	{ id: 'apple', value: '🍎 apple' },
	{ id: 'orange', value: '🍊 orange' },
	{ id: 'grape', value: '🍇 grape' },
	{ id: 'pear', value: '🍐 pear' },
]

function App() {
	// render a list of fruits with tailwind classes
	// each fruit should have a 
	// 		- delete button that removes it from the list
	// 		- a label field
	// 		- an input field with default value set to the fruit value
	// add a button that adds a new fruit (banana) to the list
	const [fruitList, setFruitList] = useState(fruits)
	return (
		<div>
			<h1 className="text-2xl font-bold mb-4">Fruits List</h1>
			<ul className="list-disc pl-5">
				{fruitList.map((fruit) => (
					<li key={fruit.id} className="mb-2">
						<label className="block mb-1">{fruit.value}</label>
						<input
							type="text"
							defaultValue={fruit.value}
							className="border rounded p-1 mr-2"
						/>
						<button
							onClick={() => setFruitList(fruitList.filter(f => f.id !== fruit.id))}
							className="bg-red-500 text-white px-2 py-1 rounded"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<button
				onClick={() => setFruitList([...fruitList, { id: 'banana', value: '🍌 banana' }])}
				className="bg-green-500 text-white px-4 py-2 rounded mt-4"
			>
				Add Banana
			</button>
		</div>
	)
}

export default App
