import { GET_USER, GET_MOVIES, GET_MOVIE_DETAIL } from './constants'

export const setUser = (user) => {
	return {
		type: GET_USER,
		payload: user
	}
}

export const setMovies = (movies) => {
	return {
		type: GET_MOVIES,
		payload: movies
	}
}

export const setMovieDetail = (movie) => {
	return {
		type: GET_MOVIE_DETAIL,
		payload: movie
	}
}
