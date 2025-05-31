import React, { useEffect, useState } from 'react'

function App() {
	const [items, setItems] = useState([
		{ id: 'apple', value: '🍎 apple' },
		{ id: 'orange', value: '🍊 orange' },
		{ id: 'grape', value: '🍇 grape' },
		{ id: 'pear', value: '🍐 pear' },
	])

	const [autoShuffle, setAutoShuffle] = useState(true)

	useEffect(() => {
		if (autoShuffle) {
			const id = setInterval(() => setItems(shuffle), 1000)
			return () => clearInterval(id)
		}
	}, [autoShuffle])

	function getChangeHandler(item: (typeof items)[number]) {
		return (event: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = event.currentTarget.value
			setItems((allItems) =>
				allItems.map((i) => ({
					...i,
					value: i.id === item.id ? newValue : i.value,
				})),
			)
		}
	}

	return (
		<div className="min-h-screen bg-gray-50 p-6 text-gray-800">
			<main className="space-y-10">
				<div>
					<h1 className="text-2xl font-bold mb-4">Without a key</h1>
					<ul className="flex flex-wrap gap-6">
						{items.map((item, index) => (
							<li key={item.id} className="space-y-1">
								<label
									htmlFor={`no-key-${item.id}-input`}
									className="block text-sm font-medium"
								>
									No key #{index + 1}
								</label>
								<input
									id={`no-key-${item.id}-input`}
									className="px-3 py-1 border border-gray-300 rounded-md shadow-sm"
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h1 className="text-2xl font-bold mb-4">With array index as key</h1>
					<ul className="flex flex-wrap gap-6">
						{items.map((item, index) => (
							<li key={item.id} className="space-y-1">
								<label
									htmlFor={`index-key-${item.id}-input`}
									className="block text-sm font-medium"
								>
									Index key #{index + 1}
								</label>
								<input
									id={`index-key-${item.id}-input`}
									className="px-3 py-1 border border-gray-300 rounded-md shadow-sm"
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>

				<div>
					<h1 className="text-2xl font-bold mb-4">With a proper key</h1>
					<ul className="flex flex-wrap gap-6">
						{items.map((item, index) => (
							<li key={item.id} className="space-y-1">
								<label
									htmlFor={`proper-key-${item.id}-input`}
									className="block text-sm font-medium"
								>
									Proper key #{index + 1}
								</label>
								<input
									id={`proper-key-${item.id}-input`}
									className="px-3 py-1 border border-gray-300 rounded-md shadow-sm"
									value={item.value}
									onChange={getChangeHandler(item)}
								/>
							</li>
						))}
					</ul>
				</div>
			</main>

			<aside className="mt-10">
				<div className="flex items-center gap-3">
					<input
						id="autoshuffle"
						type="checkbox"
						checked={autoShuffle}
						onChange={(event) => setAutoShuffle(event.target.checked)}
						className="w-4 h-4 text-indigo-600 border-gray-300 rounded"
					/>
					<label htmlFor="autoshuffle" className="text-sm">
						Auto-shuffle inputs
					</label>
				</div>
			</aside>
		</div>
	)
}

function shuffle<ArrayType>(originalArray: Array<ArrayType>) {
	const array = [...originalArray]
	let currentIndex = array.length
	let temporaryValue
	let randomIndex
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex -= 1
		temporaryValue = array[currentIndex]
		array[currentIndex] = array[randomIndex]
		array[randomIndex] = temporaryValue
	}
	return array
}

export default App
