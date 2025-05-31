import React from "react"

function App() {
	function logFormData(formData: FormData) {
		console.log(Object.fromEntries(formData))
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
			<form
				action={logFormData}
				className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md space-y-6"
			>
				<h1 className="text-2xl font-bold text-gray-800 text-center">
					User Registration
				</h1>

				<div>
					<label
						htmlFor="usernameInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Username:
					</label>
					<input
						id="usernameInput"
						name="username"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="passwordInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Password:
					</label>
					<input
						id="passwordInput"
						name="password"
						type="password"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="ageInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Age:
					</label>
					<input
						id="ageInput"
						name="age"
						type="number"
						min="0"
						max="200"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<div>
					<label
						htmlFor="photoInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Photo:
					</label>
					<input
						id="photoInput"
						name="photo"
						type="file"
						accept="image/*"
						className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
							file:rounded-md file:border-0 file:text-sm file:font-semibold
							file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
					/>
				</div>

				<div>
					<label
						htmlFor="colorInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Favorite Color:
					</label>
					<input
						id="colorInput"
						name="color"
						type="color"
						className="w-12 h-10 p-1 border border-gray-300 rounded-md"
					/>
				</div>

				<div>
					<label
						htmlFor="startDateInput"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Start Date:
					</label>
					<input
						id="startDateInput"
						name="startDate"
						type="date"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default App
