import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
	render() {
		return (
			<div className='home-container'>
				<i class="fab fa-github"></i>
				<h1>Github Battle</h1>
				<h2>Battle with your friends and Enjoy</h2>
				<Link className='button' to='/battle'>
					Battle
				</Link>

			</div>
		)
	}
}

export default Home;