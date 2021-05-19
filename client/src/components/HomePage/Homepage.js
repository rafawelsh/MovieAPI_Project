import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import MovieInfo from "../MovieInfo/MovieInfo";

import "./Homepage.css";

function Homepage() {
	const [movieID, setMovieID] = useState("");
	const [searching, setSearching] = useState(true);
	const [userInput, setUserInput] = useState("");

	return (
		<div className='homepage'>
			{searching && (
				<>
					<h1>Find More Information from your Favorite Movies!</h1>
					<SearchBar
						movieID={movieID}
						setMovieID={setMovieID}
						searching={searching}
						setSearching={setSearching}
						userInput={userInput}
						setUserInput={setUserInput}
					/>
				</>
			)}
			{!searching && (
				<MovieInfo
					movieID={movieID}
					searching={searching}
					setSearching={setSearching}
				/>
			)}
		</div>
	);
}

export default Homepage;
