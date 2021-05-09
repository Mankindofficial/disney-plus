import { GET_USER, GET_MOVIES, GET_MOVIE_DETAIL } from './constants'

const initialState = {
	user: {}
}

const updateUser = (state=initialState, action={}) => {
	switch(action.type) {
		case GET_USER:
			return {
				...state, user: action.payload
			}
		default:
			return state
	}
}

let initialMovieState = {
	recommends: [],
	newDisney: [],
	originals: [],
	trending: [],
}

const getMovies = (state=initialMovieState, action={}) => {
	switch(action.type) {
		case GET_MOVIES:
			return {
				...state, 
				recommends: action.payload.recommends,
				newDisney: action.payload.newDisney,
				originals: action.payload.originals,
				trending: action.payload.trending
			}
		default:
			return state
	}
}

let movieDetailState = {
	details: {}
}

const getMovieDetail = (state=movieDetailState, action={}) => {
	switch(action.type) {
		case GET_MOVIE_DETAIL:
			console.log(action.payload)
			return {
				...state, 
				details: action.payload
			}
		default:
			return state
	}
}


export { updateUser, getMovies, getMovieDetail };