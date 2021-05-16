import React, { useState, useEffect } from "react";
import MoviesGrid from "../MoviesGrid/MoviesGrid";
import "./SearchBar.css";
function SearchBar() {
	const [movies, setMovies] = useState([]);
	const [userInput, setUserInput] = useState("");
	const [isLoading, setIsLoading] = useState(true);

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
					setIsLoading(false);
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [userInput]);

	console.log(movies);
	console.log(isLoading);

	//input reader
	const handleOnChange = (event) => {
		setUserInput(event.target.value);
	};

	// if (isLoading) {
	// 	return <div>Loading...</div>;
	// }
	// console.log(userInput);
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

			<ul>
				{movies.map((movie) => (
					<li>
						<p>{movie.title}</p>
						<img
							src={movie.image}
							alt={`Poster for the movie ${movie.title}`}
							height='150px'
							widht='100px'
						/>
						<button>Learn More</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchBar;
