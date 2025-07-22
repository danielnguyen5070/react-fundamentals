import React from "react"
// bring in ErrorBoundary and FallbackProps type from react-error-boundary
import { ErrorBoundary, FallbackProps, useErrorBoundary } from "react-error-boundary"

function FormRegistration() {
	const { showBoundary } = useErrorBoundary()
	function logFormData(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		try {
			throw new Error("This is a simulated error for demonstration purposes.")
		}
		catch (error) {
			// If an error occurs, we can call showBoundary to trigger the error boundary
			showBoundary(error)
		}
	}

	return (
		<>
			<form onSubmit={logFormData} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
				<h1 className="text-2xl font-bold text-center text-gray-800">User Registration</h1>
				<div>
					<label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
						Username:
					</label>
					<input
						id="username"
						name="username"
						type="text"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
						Password:
					</label>
					<input
						id="password"
						name="password"
						type="password"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
						Age:
					</label>
					<input
						id="age"
						name="age"
						type="number"
						min="0"
						defaultValue={18}
						max="200"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
						Photo:
					</label>
					<input
						id="photo"
						name="photo"
						type="file"
						accept="image/*"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-50 file:bg-blue-100 file:border-0 file:rounded-md file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-200 focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="color" className="block text-sm font-medium text-gray-700 mb-1">
						Color:
					</label>
					<input
						id="color"
						name="color"
						type="color"
						className="w-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
						Start Date:
					</label>
					<input
						id="startDate"
						name="startDate"
						type="date"
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					/>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							name="waiver"
							defaultChecked
							className="form-checkbox h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<span className="ml-2 text-sm text-gray-700">Waiver Signed</span>
					</label>
				</div>
				<div>
					<label htmlFor="accountType" className="block text-sm font-medium text-gray-700 mb-1">
						Account Type:
					</label>
					<select
						id="accountType"
						name="accountType"
						defaultValue={"admin"}
						className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
					>
						<option value="">--Please select an option--</option>
						<option value="admin">Admin</option>
						<option value="teacher">Teacher</option>
						<option value="parent">Parent</option>
						<option value="student">Student</option>
					</select>
				</div>
				<fieldset className="border border-gray-300 rounded-md p-4">
					<legend className="text-sm font-medium text-gray-700 mb-2">Visibility</legend>
					<div className="flex items-center mb-2">
						<input
							type="radio"
							id="visibilityPublic"
							name="visibility"
							defaultChecked
							value="public"
							className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<label htmlFor="visibilityPublic" className="ml-2 text-sm text-gray-700">
							Public
						</label>
					</div>
					<div className="flex items-center">
						<input
							type="radio"
							id="visibilityPrivate"
							name="visibility"
							value="private"
							className="form-radio h-4 w-4 text-blue-600 focus:ring-blue-500"
						/>
						<label htmlFor="visibilityPrivate" className="ml-2 text-sm text-gray-700">
							Private
						</label>
					</div>
				</fieldset>
				<input type="hidden" name="orgId" value="123" />
				<button
					type="submit"
					className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Register
				</button>
			</form>
		</>
	)

}

function App() {
	return (
		<div className="p-4">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<FormRegistration />
			</ErrorBoundary>
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<FormRegistration />
			</ErrorBoundary>
		</div>
	)
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div className="p-4 bg-red-100 text-red-800 rounded-md">
			<h2 className="text-lg font-bold">Something went wrong!</h2>
			<p>{error.message}</p>
			<p>Please try again later.</p>
			<button
				onClick={resetErrorBoundary}
				className="mt-4 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
			>
				Reset
			</button>
		</div>
	)
}

export default App