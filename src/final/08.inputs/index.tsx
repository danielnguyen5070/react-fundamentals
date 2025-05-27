import React from "react"

function App() {
	function logFormData(formData: FormData) {
		console.log(Object.fromEntries(formData))
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
			<form
				action={logFormData}
				className="w-full max-w-xl bg-white shadow-md rounded-lg p-8 space-y-6"
			>
				<input type="hidden" name="orgId" value="123" />

				<h2 className="text-2xl font-bold text-gray-800 text-center">
					Account Registration
				</h2>

				<div>
					<label
						htmlFor="accountTypeSelection"
						className="block text-sm font-medium text-gray-700 mb-1"
					>
						Account Type:
					</label>
					<select
						id="accountTypeSelection"
						name="accountType"
						defaultValue="student"
						className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">--Please select an option--</option>
						<option value="admin">Admin</option>
						<option value="teacher">Teacher</option>
						<option value="parent">Parent</option>
						<option value="student">Student</option>
					</select>
				</div>

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
						defaultValue={18}
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
						defaultValue="#002E5D"
						className="w-12 h-10 border border-gray-300 rounded-md"
					/>
				</div>

				<fieldset className="border border-gray-300 rounded-md p-4">
					<legend className="text-sm font-medium text-gray-700">
						Visibility:
					</legend>
					<div className="flex items-center gap-4 mt-2">
						<label className="flex items-center gap-2">
							<input
								name="visibility"
								type="radio"
								value="public"
								defaultChecked
								className="accent-blue-600"
							/>
							Public
						</label>
						<label className="flex items-center gap-2">
							<input
								name="visibility"
								type="radio"
								value="private"
								className="accent-blue-600"
							/>
							Private
						</label>
					</div>
				</fieldset>

				<div className="flex items-center gap-2">
					<input
						name="waiver"
						type="checkbox"
						defaultChecked
						className="accent-blue-600"
					/>
					<label htmlFor="waiver" className="text-sm text-gray-700">
						Waiver Signed
					</label>
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
						defaultValue={new Date().toISOString().slice(0, 10)}
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
