import React from "react"
import "./index.css"

function Box({ size, ...props }: { size?: "small" | "medium" | "large" } & React.ComponentProps<"div">) {

	return (
		<div className={`box box-${size}`.trim()} {...props}>
		</div>
	)
}

function App() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 p-6">
			<Box size="small" style={{ fontStyle: "italic", backgroundColor: "red" }}>
				small lightblue box
			</Box>
			<Box size="medium" style={{ fontStyle: "italic", backgroundColor: "blue" }}>
				medium pink box
			</Box>
			<Box size="large" style={{ fontStyle: "italic", backgroundColor: "pink" }}>
				large orange box
			</Box>
			<Box className="">
				sizeless colorless box
			</Box>
		</div>
	)
}

export default App
