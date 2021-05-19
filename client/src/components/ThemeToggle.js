import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle({ themeSwitch = (f) => f }) {
	return (
		<button
			className='themeToggle'
			type='button'
			onClick={themeSwitch}
			aria-label='change theme color'
		>
			<FontAwesomeIcon icon={faSun} />
			<FontAwesomeIcon icon={faMoon} />
		</button>
	);
}

export default ThemeToggle;
