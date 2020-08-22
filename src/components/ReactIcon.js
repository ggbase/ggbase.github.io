import React, { useState, useEffect } from 'react';
import './ReactIcon.css';
import { IconContext } from 'react-icons';

/*
* Icons from the react-icons module
*
* @param {string} props.icon 		The name of the icon - ex. "MdSettings"
* @param {string} props.size 		Size of the icon - default md
* @param {string} props.color 		Color of the icon - default white
* @param {boolean} props.clickable 	If true, the icon will pop out on hover
*/
export function ReactIcon(props) {
	const { icon, size, color, clickable } = props;
	const className = `reacticon-${size || 'md'} ${clickable && 'reacticon-clickable'} c-${color || 'white'}`;
	const dir = icon.substring(0,2).toLowerCase();
	const [iconComponent, setIconComponent] = useState(null);

	useEffect(() => {
		let reactIcons = null;
		if (icon === 'HypixelLogo') {
			setIconComponent(HypixelLogo);
			return;
		}
		switch(dir) {
			case 'fa': reactIcons = import('react-icons/fa'); break;
			case 'go': reactIcons = import('react-icons/go'); break;
			case 'md': reactIcons = import('react-icons/md'); break;
			case 'ri': reactIcons = import('react-icons/ri'); break;
			default: break;
		}
		reactIcons
			.then((response) => {setIconComponent(response[icon])});
	},[dir, icon]);

	return (
		<IconContext.Provider value={{ className: className }}>
			{iconComponent}
		</IconContext.Provider>
		);
}

function HypixelLogo(props) {
	return (
		<IconContext.Consumer>
			{({ className }) =>
				<svg 
					version="1.0" xmlns="http://www.w3.org/2000/svg"
				 	width="0.6em" height="1em" viewBox="0 0 102 194"
				 	stroke="currentColor" fill="currentColor" strokeWidth="0"
				 	className={className}
				 	preserveAspectRatio="xMidYMid meet">
				 	<g transform="translate(0,194) scale(0.1,-0.1)" stroke="none">
						<path d="M750 1858 c-19 -5 -59 -14 -89 -19 -99 -18 -91 13 -91 -344 l0 -315
							-70 0 -70 0 0 285 c0 157 -2 285 -4 285 -24 0 -280 -140 -309 -168 l-21 -22
							42 -43 c33 -33 44 -54 52 -96 6 -31 10 -230 10 -473 0 -360 -2 -422 -15 -434
							-37 -37 -4 -141 81 -254 46 -60 124 -130 145 -130 5 0 9 172 9 425 l0 425 75
							0 75 0 0 -300 c0 -165 4 -300 8 -300 28 0 184 147 227 213 17 26 17 29 1 46
							-16 18 -17 55 -13 473 4 501 2 477 75 648 31 70 38 96 29 102 -16 10 -104 8
							-147 -4z"/>
					</g>
				</svg>
			}
		</IconContext.Consumer>
		);
}