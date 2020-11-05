import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	color: ${(pr) => pr.theme.danger};
	.logo {
		display:flex;
		flex-direction:column ;
		align-content:center;
		max-width: 60%;
	}
	img{
		margin:10%;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}
	h2 {
		font-size: 2.4rem;
		font-weight: 500;
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 3rem;
		letter-spacing:2px;
		font-weight: bolder;
		text-decoration:underline;
		color:wheat;
	}
	@media ${(pr) => pr.theme.breakpoints.small} {
		flex-flow: column wrap;
		.logo {
			margin-bottom: 2%;
		}
	}
`;

export default function Header(props) {
	return (
		<StyledHeader>
			<div className='logo'>				
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/320px-NASA_Worm_logo.svg.png'
					alt='NASA Logo'
				/>				
				<img src = 'https://fairport.org/wp-content/uploads/2017/12/nasa-logo.gif'
				alt ="NASA Planetary Logo"
				/>
				</div>
			<div>
				<h1>Photo of the Day</h1>
				<h2>{props.date}</h2>
				<h3>{props.title}</h3>
			</div>
		</StyledHeader>
	);
}