import React, { useState, useEffect } from "react";
import "./SearchBar.css";

function SearchBar({ setMovieID, setSearching, userInput, setUserInput }) {
	const [movies, setMovies] = useState([]);

	const {
		REACT_APP_API_SEARCH,
		REACT_APP_RAPIDAPI_KEY,
		REACT_APP_RAPIDAPI_HOST,
	} = process.env;

	//API call
	useEffect(() => {
		if (userInput === "") {
			setMovies();
		}
		if (userInput) {
			fetch(`${REACT_APP_API_SEARCH}${userInput}`, {
				method: "GET",
				headers: {
					"x-rapidapi-key": `${REACT_APP_RAPIDAPI_KEY}`,
					"x-rapidapi-host": `${REACT_APP_RAPIDAPI_HOST}`,
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setMovies(data.titles);
				})
				.catch((err) => {
					console.error(err);
				});
		}
		// eslint-disable-next-line
	}, [userInput]);

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

			{movies ? (
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
							<button
								className='btn-learn-more'
								onClick={() => handleOnClick(movie)}
							>
								Learn More
							</button>
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export default SearchBar;
