import React, { useEffect } from "react";

function MoviesGrid({ movieID }) {
	useEffect(() => {
		fetch(
			`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${movieID}`,
			{
				method: "GET",
				headers: {
					"x-rapidapi-key":
						"f97c444b7dmsh3fbb6dfde347f83p15ab3cjsn3001e7910778",
					"x-rapidapi-host":
						"imdb-internet-movie-database-unofficial.p.rapidapi.com",
				},
			}
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	return (
		<div>
			<p>Hello</p>
		</div>
	);
}

export default MoviesGrid;
