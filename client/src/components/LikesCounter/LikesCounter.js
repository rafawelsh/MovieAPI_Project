import React, { useState, useEffect } from "react";
import firebase from "../../util/firebase";

function LikesCounter({ movieID }) {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [movieData, setMovieData] = useState({});

	useEffect(() => {
		if (!movieID) return null;
		// retrieve likes/dislikes from Firebase and set data
		// ELSE set a new entry in Firebase with movieID and set data
		const movieRef = firebase.database().ref(`${movieID}/`);
		movieRef.on("value", (data) => {
			if (data.val() !== null) {
				setMovieData({
					...data.val(),
				});
			} else {
				firebase.database().ref(`${movieID}/`).set({
					likes: 0,
					dislikes: 0,
				});
				setMovieData({
					...data.val(),
				});
			}
		});
	}, [movieID]);

	useEffect(() => {
		if (!movieData) return null;
		const { dislikes: down, likes: up } = movieData;
		setDislikes(down);
		setLikes(up);
	}, [dislikes, likes, movieData]);

	const handleLikeClick = () => {
		const updates = {};
		updates[`${movieID}/likes`] = firebase.database.ServerValue.increment(1);
		firebase.database().ref().update(updates);
	};

	const handleDislikeClick = (e) => {
		const updates = {};
		updates[`${movieID}/dislikes`] = firebase.database.ServerValue.increment(1);
		firebase.database().ref().update(updates);
	};

	return (
		<div>
			<button className='counter' onClick={() => handleLikeClick(movieID)}>
				👍 {likes}
			</button>
			<button className='counter' onClick={() => handleDislikeClick(movieID)}>
				👎 {dislikes}
			</button>
		</div>
	);
}

export default LikesCounter;
