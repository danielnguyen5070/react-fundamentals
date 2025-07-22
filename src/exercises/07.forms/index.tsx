import React from "react"

function App() {
	function handleSubmit(formData: FormData) {
		const data = Object.fromEntries(formData.entries())
		console.log(data)
	}
	return (
		<form className="flex flex-col gap-4 p-4 max-w-sm mx-auto bg-white shadow-md rounded"
			action={handleSubmit}>
			<div className="flex flex-col">
				<label htmlFor="username" className="text-sm">Username</label>
				<input
					type="text"
					name="username"
					id="username"
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="password" className="text-sm">Password</label>
				<input
					type="password"
					name="password"
					id="password"
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="age" className="text-sm">Age</label>
				<input
					type="number"
					name="age"
					id="age"
					min="0"
					max="200"
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="photo" className="text-sm">Photo</label>
				<input
					type="file"
					name="photo"
					id="photo"
					accept="image/*"
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 file:cursor-pointer file:bg-blue-100 file:text-blue-700 file:border-none file:rounded file:px-4 file:py-2 hover:file:bg-blue-200"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="color" className="text-sm">Favorite Color</label>
				<input
					type="color"
					name="color"
					id="color"
					className=" border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="startDate" className="text-sm">Start Date</label>
				<input
					type="date"
					name="startDate"
					id="startDate"
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
			>
				Submit
			</button>
		</form>
	)
}

export default App

