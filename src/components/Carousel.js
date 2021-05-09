import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const Carousel = () => {

	let settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
	}

	return(
		<SlickCarousel {...settings} >
			<Wrap>
				<a href="/home">
					<img src="/images/slider-1.jpg" alt="sliderImage" />
				</a>
			</Wrap>
			<Wrap>
				<a href="/home">
					<img src="/images/slider-2.jpg" alt="sliderImage" />
				</a>
			</Wrap>
			<Wrap>
				<a href="/home">
					<img src="/images/slider-3.jpg" alt="sliderImage" />
				</a>
			</Wrap>
			<Wrap>
				<a href="/home">
					<img src="/images/slider-4.jpg" alt="sliderImage" />
				</a>
			</Wrap>
		</SlickCarousel>
	)
}

const SlickCarousel = styled(Slider)`
	margin: 20px 0 0 0;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0.2s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  ul li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
`

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    transition-duration: 300ms;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`

export default Carousel;
