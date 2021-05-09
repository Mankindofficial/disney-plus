import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'
import { updateUser, getMovies, getMovieDetail } from './app/reducers'

const rootReducer = combineReducers({
  user: updateUser,
  movies: getMovies,
  movieDetail: getMovieDetail
});
 
const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))

let persistor = persistStore(store)


ReactDOM.render(
  <React.StrictMode>
	  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
	    	<App/>
      </PersistGate>
	  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
