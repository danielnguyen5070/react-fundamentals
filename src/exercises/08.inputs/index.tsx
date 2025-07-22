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
					defaultValue={18}
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
					defaultValue={"#cccccc"}
					className=" border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex flex-col">
				<label htmlFor="startDate" className="text-sm">Start Date</label>
				<input
					type="date"
					name="startDate"
					id="startDate"
					defaultValue={new Date().toISOString().split("T")[0]}
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</div>
			<div className="flex items-center">
				<label className="text-sm flex items-center gap-2">
					<input
						type="checkbox"
						name="waiver"
						defaultChecked
						id="waiver"
						className="focus:ring-2 focus:ring-blue-500"
					/>
					Waiver Signed
				</label>
			</div>
			<div className="flex flex-col">
				<label htmlFor="accountType" className="text-sm">Account Type</label>
				<select
					name="accountType"
					id="accountType"
					defaultValue={"admin"}
					className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					<option value="">--Please select an option--</option>
					<option value="admin">Admin</option>
					<option value="teacher">Teacher</option>
					<option value="parent">Parent</option>
					<option value="student">Student</option>
				</select>
			</div>
			<div className="flex flex-col">
				<label className="text-sm">Visibility</label>
				<div className="flex items-center gap-4">
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="visibility"
							value="public"
							className="focus:ring-2 focus:ring-blue-500"
						/>
						Public
					</label>
					<label className="flex items-center gap-2">
						<input
							type="radio"
							name="visibility"
							defaultChecked
							value="private"
							className="focus:ring-2 focus:ring-blue-500"
						/>
						Private
					</label>
				</div>
			</div>
			<input type="hidden" name="orgId" value="123" />
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

