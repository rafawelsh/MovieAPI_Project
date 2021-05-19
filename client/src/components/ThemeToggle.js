import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function ThemeToggle({ themeSwitch = (f) => f }) {
	return (
		<button
			className='toggle-button'
			type='button'
			onClick={themeSwitch}
			aria-label='change theme color'
		>
			<FontAwesomeIcon className='toggle-sun' icon={faSun} />
		</button>
	);
}

export default ThemeToggle;
