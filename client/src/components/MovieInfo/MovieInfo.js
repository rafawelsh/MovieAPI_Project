import React, { useEffect, useState } from "react";
import LikesCounter from "../LikesCounter/LikesCounter";

import "./MovieInfo.css";

function MoviesGrid({ movieID, setSearching }) {
	const [movieInfo, setMovieInfo] = useState({});
	const [loading, setLoading] = useState(true);
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
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [movieID]);

	const Loading = () => {
		return <p>Loading...</p>;
	};

	const handleClick = () => {
		setSearching(true);
	};

	const { id, length, title, year, plot, poster } = movieInfo;

	return (
		<div className='movie-tile'>
			<button onClick={handleClick}>X</button>
			{loading ? (
				<Loading />
			) : (
				<section className='movie-section'>
					<img
						className='movie-poster'
						src={poster}
						alt={`Poster for the movie:${title}`}
					/>
					<div className='movie-info'>
						<h1>{title}</h1>
						<h2>{year}</h2>
						<h2>{length}</h2>
						<p>{plot}</p>
						<LikesCounter movieID={id} />
					</div>
				</section>
			)}
		</div>
	);
}

export default MoviesGrid;
