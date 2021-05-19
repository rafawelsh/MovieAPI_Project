import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar({ movieID, setMovieID, searching, setSearching }) {
	const [movies, setMovies] = useState([]);
	const [userInput, setUserInput] = useState("");

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

			<ul className='movieGrid'>
				{movies.map((movie) => (
					<li key={movie.id} className='movie'>
						<h2>{movie.title}</h2>
						<img
							src={movie.image}
							alt={`Poster for the movie ${movie.title}`}
							height='150px'
							width='100px'
						/>
						<button onClick={() => handleOnClick(movie)}>Learn More</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default SearchBar;
