import React from "react"

export function Box({
	style = {},
	className = '',
	...otherProps
}: React.ComponentProps<'div'>) {
	return (
		<div
			className={`box ${className}`}
			style={{ fontStyle: 'italic', ...style }}
			{...otherProps}
		/>
	)
}

function App() {
	return (
		<div>
			<Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
				small lightblue box
			</Box>
			<Box className="box--medium" style={{ backgroundColor: 'pink' }}>
				medium pink box
			</Box>
			<Box className="box--large" style={{ backgroundColor: 'orange' }}>
				large orange box
			</Box>
			<Box>sizeless colorless box</Box>
		</div>
	)
}

export default App