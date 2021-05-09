import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { auth, provider } from '../firebase'
import { setUser } from '../app/actions'


const mapStateToProps = state => {
	return {
		user: state.user.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleAuthIn: () => {
			auth.signInWithPopup(provider)
			.then(result => {
				dispatch(setUser(result.user))
			})
			.catch(alert)
		},
		handleAuthOut: () => {
			auth.signOut()
			.then(() => {
				dispatch(setUser(null))
			})
		}
	}
}

class Header extends Component {

	render() {
		return(
			<Nav>
				<Link to="/">
					<Logo src="/images/logo.svg" alt="disney+"/>
				</Link>

				{ this.props.user
					?
					<>
						<NavMenu>
							<a href="/home">
								<img src="/images/home-icon.svg" alt="HOME" />
								<span>HOME</span>
							</a>
							<a href="/search">
								<img src="/images/search-icon.svg" alt="search" />
								<span>SEARCH</span>
							</a>
							<a href="/watchlist">
								<img src="/images/watchlist-icon.svg" alt="watchlist" />
								<span>WATCHLIST</span>
							</a>
							<a href="/original">
								<img src="/images/original-icon.svg" alt="original" />
								<span>ORIGINAL</span>
							</a>
							<a href="/movie">
								<img src="/images/movie-icon.svg" alt="movie" />
								<span>MOVIE</span>
							</a>
							<a href="/series">
								<img src="/images/series-icon.svg" alt="series" />
								<span>SERIES</span>
							</a>
						</NavMenu>
						<SignOut>
							<UserImg src={this.props.user.photoURL} alt={this.props.user.displayName} />
							<Dropdown onClick={this.props.handleAuthOut}>Sign Out</Dropdown>
						</SignOut>
					</>
					:
					<>
						<Login onClick={this.props.handleAuthIn}>Login</Login>
					</>
				}
			</Nav>
		);
	}
}

const Nav = styled.nav`
	height:70px;
	background-color: #040714;
	position: fixed;
	top:0px;
	left:0px;
	right:0px;
	z-index: 3;
	display: flex;
	padding:0px 40px;
	align-items: center;
	justify-content: space-between;
`

const Logo = styled.img`
	width: 80px;
	max-height: 65px;
`

const NavMenu =  styled.div`
	display:flex;
	margin-left: 40px;
	margin-right: auto;

	a {
		display:flex;
		align-items:center;
		cursor:pointer;
		padding: 0 12px;

		img {
			width:20px;
			min-width:20px;
			height:20px;
		}

		span {
			color: #f9f9f9;
			font-size: 13px;
			letter-spacing: 1.4px;
			white-space: nowrap;
			padding: 4px 0px 2px 0px;
			margin-left: 5px;
			text-transform: uppercase;
			position: relative;
			
			&:before {
				content: '';
				background-color: #f9f9f9;
				border-radius: 0px 0px 4px 4px;
				position: absolute;
				bottom: -7px;
				left: 0px;
				right: 0px;
				height: 2px;
				width: auto;
				opacity: 0;
				transform-origin: left center;
				transform: scaleX(0);
				transition: all .25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
			}
		}

		&:hover {
			span:before {
				transform: scaleX(1);
				opacity: 1;
			}
		}
	}

  @media (max-width: 768px) {
    display: none;
  }
`

const Login = styled.a`
	background-color: rgba(0, 0, 0, 0.6);
	color: #f9f9f9;
	font-size: 14px;
	padding: 8px 16px;
	border-radius: 5px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	border: 1px solid #f9f9f9;
	transition: all .2s;

	&:hover {
		font-weight: bold;
		background-color: #f9f9f9;
		color: rgba(0, 0, 0, 0.6);
		border-color: transparent;
	}
`

const UserImg = styled.img`
	width:35px;
	height:35px;
	cursor: pointer;
	border-radius:50%;
`

const Dropdown = styled.div`
	color: #f9f9f9;
	border: 1px solid #333;
	background-color:  rgba(0, 0, 0, 0.7);
	position: absolute;
	top: 50px;
	right: 0px;
	border-radius: 5px;
	font-size: 16px;
	text-align: center;
	cursor: pointer;
	padding: 10px;
	width:100px;
	opacity: 0;
	visibility: hidden;
	transition: opacity .5s;
`

const SignOut = styled.div`
	position:relative;
	height: 50px;
	width: 80px;
	display:flex;
	align-items:center;
	justify-content:flex-end;
	
	&:hover {
		${Dropdown} {
			visibility: visible;
			opacity: 1;
		}
	}
`

export default connect(mapStateToProps, mapDispatchToProps)(Header);
