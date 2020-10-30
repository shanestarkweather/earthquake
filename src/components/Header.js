import React from 'react';
import './Header.css';
	 
const Header = ({setTime, setMagnitude}) => {

	return (
		<div className='header'>
			<form>
				<select onChange={ (event) => setTime(event.target.value)}>
					<option value='hour'>Past Hour</option>
					<option value='day'>Past Day</option>
					<option value='week'>Past 7 Days</option>
					<option value='month'>Past 30 Days</option>
				</select>
				<select onChange={ (event) => setMagnitude(event.target.value)}>
					<option value='1.0'>1.0+</option>
					<option value='2.5'>2.5+</option>
					<option value='4.5'>4.5+</option>
					<option value='all'>All</option>
				</select>
			</form>
		</div>
	);
};

export default Header;
