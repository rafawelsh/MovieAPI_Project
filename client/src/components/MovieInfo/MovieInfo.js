import React, { useEffect, useState } from "react";
import LikesCounter from "../LikesCounter/LikesCounter";

import "./MovieInfo.css";

function MoviesGrid({ movieID, setSearching, user }) {
	const [movieInfo, setMovieInfo] = useState({});
	const [loading, setLoading] = useState(true);

	const {
		REACT_APP_API_MOVIE,
		REACT_APP_RAPIDAPI_KEY,
		REACT_APP_RAPIDAPI_HOST,
	} = process.env;

	useEffect(() => {
		fetch(`${REACT_APP_API_MOVIE}${movieID}`, {
			method: "GET",
			headers: {
				"x-rapidapi-key": `${REACT_APP_RAPIDAPI_KEY}`,
				"x-rapidapi-host": `${REACT_APP_RAPIDAPI_HOST}`,
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setMovieInfo(data);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
			});
		// eslint-disable-next-line
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
						<h2>Released: {year}</h2>
						<h2>Duration: {length}</h2>
						<p>{plot}</p>
						<LikesCounter movieID={id} />
					</div>
				</section>
			)}
		</div>
	);
}

export default MoviesGrid;
