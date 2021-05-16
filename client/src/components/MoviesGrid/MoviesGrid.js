import React from "react";

function MoviesGrid({ movie }) {
	if (!movie) return null;

	console.log(`MG: ${movie}`);
	return (
		<div>
			<p>Hello</p>

			{movie.map((item) => (
				<>
					<p>{item.title}</p>
					<p>{item.image}</p>
				</>
			))}
		</div>
	);
}

export default MoviesGrid;
