import React from "react";

function ThemeToggle({ themeSwitch = (f) => f }) {
	return (
		<button
			className='themeToggle'
			type='button'
			onClick={themeSwitch}
			aria-label='change theme color'
		>
			X
		</button>
	);
}

export default ThemeToggle;
