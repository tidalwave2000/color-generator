import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
	const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  // set the default color value and the amout of tint and shade
	const [list, setList] = useState(new Values("#226").all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		// catch errors using try and catch
		try {
			let colors = new Values(color).all(10);
			// update state value of list with colors
      setList(colors);
      setError(false);
			console.log(colors);
		} catch (error) {
			// if the value entered is not a color then set setError to true and log error
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="f15025"
						className={`${error ? "error" : null}`}
					/>
					<button className="btn" type="submit">
						submit
					</button>
				</form>
			</section>

			<section className="colors">
				{/* fill the list with different shades of the selected color using map */}
				{list.map((color, index) => {
					console.log(color);
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
