import {
	ErrorBoundary,
	useErrorBoundary,
	type FallbackProps,
} from 'react-error-boundary'

function OnboardingForm() {
	const { showBoundary } = useErrorBoundary()

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
			<form
				action="/api/onboarding"
				method="POST"
				encType="multipart/form-data"
				onSubmit={(event) => {
					try {
						event.preventDefault()
						const formData = new FormData(event.currentTarget)
						console.log(Object.fromEntries(formData))
						const accountType = formData.get('accountType') as string // fixed typo
						console.log(accountType.toUpperCase())
					} catch (error: unknown) {
						showBoundary(error)
					}
				}}
				className="w-full max-w-xl bg-white shadow-md rounded-lg p-8 space-y-6"
			>
				<input type="hidden" name="orgId" value="123" />

				<h2 className="text-2xl font-semibold text-gray-800 text-center">
					Onboarding Form
				</h2>

				{/* Account Type */}
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

				{/* Username */}
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

				{/* Password */}
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

				{/* Age */}
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

				{/* Photo */}
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

				{/* Color */}
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
						className="w-16 h-10 border border-gray-300 rounded-md"
					/>
				</div>

				{/* Visibility */}
				<fieldset className="border border-gray-300 rounded-md p-4">
					<legend className="text-sm font-medium text-gray-700">
						Visibility:
					</legend>
					<div className="flex gap-6 mt-2">
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

				{/* Waiver */}
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

				{/* Start Date */}
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

				{/* Submit */}
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

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
	return (
		<div
			role="alert"
			className="min-h-screen flex items-center justify-center bg-red-50 p-6"
		>
			<div className="bg-white shadow-lg rounded-md p-6 max-w-md w-full space-y-4 text-center border border-red-300">
				<h2 className="text-xl font-semibold text-red-600">Something went wrong</h2>
				<pre className="text-sm text-red-700 whitespace-pre-wrap">{error.message}</pre>
				<button
					onClick={resetErrorBoundary}
					className="mt-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
				>
					Try Again
				</button>
			</div>
		</div>
	)
}

function App() {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<OnboardingForm />
		</ErrorBoundary>
	)
}

export default App
