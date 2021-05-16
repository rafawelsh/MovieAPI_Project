import React, { useState, useEffect } from "react";
import MovieInfo from "../MovieInfo/MovieInfo";
import "./SearchBar.css";
function SearchBar() {
	const [movies, setMovies] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [searching, setSearching] = useState(true);
	const [movieID, setMovieID] = useState("");
	//API call
	useEffect(() => {
		if (userInput) {
			fetch(
				`https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${userInput}`,
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
					setMovies(data.titles);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [userInput]);

	// console.log(movies);
	// console.log(isLoading);

	//input reader
	const handleOnChange = (event) => {
		setUserInput(event.target.value);
	};

	const handleOnClick = ({ title }) => {
		setMovieID(title);
		setSearching(false);
	};

	return (
		<div>
			<input
				type='text'
				name='searchBar'
				id='searchBar'
				placeholder='Search For Movies'
				value={userInput}
				onChange={handleOnChange}
			></input>

			{searching && (
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>
							<p>{movie.title}</p>
							<img
								src={movie.image}
								alt={`Poster for the movie ${movie.title}`}
								height='150px'
								widht='100px'
							/>
							<button onClick={() => handleOnClick(movie)}>Learn More</button>
						</li>
					))}
				</ul>
			)}

			{!searching && <MovieInfo movieID={movieID} />}
		</div>
	);
}

export default SearchBar;
