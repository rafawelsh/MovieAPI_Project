import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyBWzhtYaPGOPYKQ-sSzWKtTN_Zs7VjG5lA",
	authDomain: "yearone-db.firebaseapp.com",
	projectId: "yearone-db",
	storageBucket: "yearone-db.appspot.com",
	messagingSenderId: "699390264048",
	databaseURL: "https://yearone-db-default-rtdb.firebaseio.com/",
	appId: "1:699390264048:web:5bb5bdec4f228aa753b835",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
