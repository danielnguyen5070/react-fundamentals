import React from "react"
import "./index.css"

interface BoxProps extends React.ComponentProps<"div"> {
	size?: "small" | "medium" | "large"
}
function Box({ size, ...props }: BoxProps) {
	const className = size ? `box box-${size}` : "box";
	return (
		<div className={className}
			style={{ ...props.style, fontStyle: "italic" }}
			{...props}>

		</div>
	)
}

function App() {
	return (
		<div>
			<Box size="small" style={{ backgroundColor: "lightblue" }}>small lightblue box</Box>
			<Box size="medium" style={{ backgroundColor: "pink" }}>medium pink box</Box>
			<Box size="large" style={{ backgroundColor: "orange" }}>large orange box</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

export default App
