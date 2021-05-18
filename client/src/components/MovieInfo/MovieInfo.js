import React, { useEffect, useState } from "react";
import LikesCounter from "../LikesCounter/LikesCounter";

function MoviesGrid({ movieID }) {
	const [movieInfo, setMovieInfo] = useState({});

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
				setMovieInfo(data);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	// console.log(movieInfo);

	const { id, length, title, year, rating, plot, poster, cast } = movieInfo;

	return (
		<div>
			{id}
			{title}
			{year}
			{length}
			{rating}
			{length}
			<LikesCounter movieID={id} />
		</div>
	);
}

export default MoviesGrid;
