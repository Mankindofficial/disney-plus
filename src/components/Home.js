import React, { Component } from 'react'
import styled from 'styled-components'
import Carousel from './Carousel'
import Recommended from './Recommended'
import NewDisney from './NewDisney'
import Originals from './Originals'
import Trending from './Trending'
import Viewers from './Viewers'
import { connect } from 'react-redux'
import { setMovies } from '../app/actions'
import { movies } from '../moviesData'

const mapDispatchToProps = (dispatch) => {
	return {
		handleMoviesIn: () => {
			dispatch(setMovies(movieCategory))
			console.warn("in")
		}
	}
}

let movieCategory = {
	recommends: [], originals: [], newDisney: [], trending: []
}

let { recommends, originals, newDisney, trending } = movieCategory;

class Home extends Component {

	componentDidMount() {
		movies.map((movie) => {
			switch(movie.type) {
				case 'recommend':
					return recommends.push(movie)
					break;
				case 'new':
					return newDisney.push(movie)
					break;
				case 'original':
					return originals.push(movie)
					break;
				case 'trending':
					return trending.push(movie)
					break;
				default:
					return movie
			} 
		})

		this.props.handleMoviesIn();
	}

	render() {
		return (
			<HomePage>
				<Carousel/>
				<Viewers/>
				<Recommended/>
				<NewDisney/>
				<Originals/>
				<Trending/>
			</HomePage>
		)		
	}
}

const HomePage = styled.main`
	position: relative;
	top: 70px;
	min-height: calc(100vh - 70px);
	display: block;
	overflow-x: hidden;
	padding: 0.5vh calc(3.5vw + 5px);

	&:before {
		content:'';
		position: absolute;
		top: 0px;
		left: 0px;
		right: 0px;
		width: 100%;
		height: 100%;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-image: url('/images/home-background.png');
		z-index: -1;
	}
`

export default  connect(null, mapDispatchToProps)(Home);
