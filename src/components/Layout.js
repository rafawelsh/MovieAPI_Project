import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Layout({ children }) {
	const [lightMode, setLightMode] = useState("default");

	const toggleTheme = () => {
		const localTheme = window.localStorage.getItem("lightMode");
		const savedMode = localTheme === "inverted" ? "inverted" : "default";
		if (savedMode === "default") {
			window.localStorage.setItem("lightMode", "inverted");
			setLightMode("inverted");
		} else {
			window.localStorage.setItem("lightMode", "default");
			setLightMode("default");
		}
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem("lightMode");
		setLightMode(localTheme);
		if (localTheme === "inverted") {
			document.body.classList.add("is_inverted");
		} else {
			document.body.classList.remove("is_inverted");
		}
	}, [lightMode]);

	return (
		<div className='layout'>
			<ThemeToggle themeSwitch={toggleTheme} />
			{children}
		</div>
	);
}

export default Layout;
