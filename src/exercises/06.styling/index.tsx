import React from "react"

export function Box({
	size,
	...otherProps
}: {
	size?: "small" | "medium" | "large"
} & React.ComponentProps<"div">) {
	const sizeClasses = {
		small: "h-20 w-20 text-sm",
		medium: "h-28 w-28 text-base",
		large: "h-36 w-36 text-lg",
	}

	const sizeClassName = size ? sizeClasses[size] : ""

	return (
		<div
			{...otherProps}
			className={[
				"italic rounded-md shadow-md p-4 text-gray-800 text-center",
				otherProps.className,
				sizeClassName,
			]
				.filter(Boolean)
				.join(" ")}
			style={{ ...otherProps.style }}
		/>
	)
}

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-6">
			<Box size="small" style={{ backgroundColor: "lightblue" }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ backgroundColor: "pink" }}>
				medium pink box
			</Box>
			<Box size="large" style={{ backgroundColor: "orange" }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

export default App
