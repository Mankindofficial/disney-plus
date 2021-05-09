import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
  return {
    details: state.movieDetail.details
  }
}

class MovieDetail extends Component {

	render() {

		const { backgroundImg, description, subTitle, title, titleImg } = this.props.details
		
		return (
			<Container>
				<BgImage>
					<img src={backgroundImg} alt={title} />
				</BgImage>
				<TitleImage>
					<img src={titleImg} alt={title} />
				</TitleImage>
				<ContentMeta>
	        <Controls>
	        	<Player>
	        		<img src="/images/play-icon-black.png" alt="" />
	        		<span>Play</span>
	        	</Player>
	        	<Trailer>
	        		<img src="/images/play-icon-white.png" alt="" />
	        		<span>Trailer</span>
	        	</Trailer>
	        	<AddList>
	            <span />
	            <span />
	          </AddList>
	          <GroupWatch>
	            <div>
	              <img src="/images/group-icon.png" alt="" />
	            </div>
	          </GroupWatch>
	        </Controls>
	        <Subtitle>{subTitle}</Subtitle>
	        <Description>{description}</Description>
	      </ContentMeta>
			</Container>
		)
	}
}

const Container = styled.div`
	position: relative;
	top: 70px;
	overflow-x: hidden;
	min-height: calc(100vh - 70px);
	padding: 0 calc(3.5vw + 5px) 2vw;
`

const BgImage = styled.div`
	position: fixed;
	inset: 0px;
	opacity: 0.8;
	z-index: -1;

	img {
	 	width: 100%;
	 	height: 100%;
	}

  @media (max-width: 768px) {
  	img {
	 	object-fit:cover;
  	}
  }
`

const TitleImage = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 30vw;
  min-height: 170px;
  -webkit-box-pack: start;
  margin: 0px auto;
  padding-bottom: 24px;

 img {
 	width: 35vw;
 	max-width: 600px;
 	min-width: 200px;
 	height: auto;
 }
`

const ContentMeta = styled.div`
  max-width: 870px;
	display: flex;
	flex-direction: column;
`

const Controls = styled.div`
	display:flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0px;
  min-height: 56px;
`

const Player = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px 25px;
	margin: 0px 20px 0px 0px;
	font-size: 15px;
	text-align: center;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	cursor: pointer;
	border-radius: 5px;
	border: 1px solid #ccc;
	background-color: rgba(255, 255, 255, 0.9);
	transition: all 0.2s;

	img {
		width:30px;
		height:30px;
	}

	&:hover {
		background-color: #ccc;
	}

  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
      height: 25px;
    }
  }
`

const Trailer = styled(Player)`
	color: white;
	background-color: rgba(0, 0, 0, 0.3);

	&:hover {
		color: rgba(0, 0, 0, 0.6);
		border-color: rgba(255, 255, 255, 0.3);
		background-color:  rgba(255, 255, 255, 0.6);
	}
`

const AddList = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	margin: 0px 15px 0px 0px;
	border-radius: 50%;
	border: 2px solid #ccc;
	background-color: rgba(0, 0, 0, 0.6);
	position: relative;
  cursor: pointer;

	span {
		background-color: white;
		height: 3px;
		width: 17px;
		position: absolute;
		
		&:first-child {
			transform: rotate(90deg)
		}
	}

	@media (max-width: 768px) {
		margin: 0px 10px 0px 0px;
	}
`

const GroupWatch = styled.div`
	height: 45px;
	width: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
  cursor: pointer;
	border-radius: 50%;
	border: 1px solid white;
	background-color: rgba(0, 0, 0, 0.8);

	img {
		width: 30px;
		height: 30px;
	}
`

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 20px;
  line-height: 1.4;
  padding: 10px 0px;
  color: rgb(249, 249, 249);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default connect(mapStateToProps, null)(MovieDetail);
