import React from "react"

// add a className prop to each div and apply the correct class names
// Here are the available class names: box, box--large, box--medium, box--small
// each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const smallBox = <div>small lightblue box</div>
const mediumBox = <div>medium pink box</div>
const largeBox = <div>large orange box</div>

// the sizelessColorlessBox should still be a box, just with no size or color
const sizelessColorlessBox = <div>sizeless colorless box</div>

function App() {
	return (
		<div>
			{smallBox}
			{mediumBox}
			{largeBox}
			{sizelessColorlessBox}
		</div>
	)
}

export default App
