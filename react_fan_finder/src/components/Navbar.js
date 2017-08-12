import React from 'react'
import {
  NavLink
} from 'react-router-dom'

const Navbar = (props) => {
	if(props.mode !== 'auth'){
		return (
			<ul>
				<li><NavLink to='/home'>Content</NavLink></li>
			</ul>
		);
	} else {
		return (
			<div>

			</div>
		);
	}
}

export default Navbar;