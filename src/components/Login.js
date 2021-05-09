import styled from 'styled-components'

const Login = () => {

	return (
		<Container>
			<Content>
				<CTA>
					<CTALogo src="/images/cta-logo-one.svg" alt="" />
					<CTAButton>Get All There</CTAButton>
					<CTADescription>Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.</CTADescription>
					<CTALogo src="/images/cta-logo-two.png" alt="" />
				</CTA>
				<BgImage/>
			</Content>
		</Container>
	);
}

const Container = styled.section`
	overflow: hidden;
	width: 100%;
	height: 100vh;
	display: flex;
	text-align: center;
`

const Content = styled.div`
	width: 100%;
	min-height: 100vh;
	height: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-bottom:10vw;
	padding: 80px 40px;
	box-sizing: border-box;
`

const BgImage = styled.div`
	height: 100%;
	width: 100%;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: top;
	background-image: url('/images/login-background.jpg');
	position: absolute;
	top: 0px;
	left: 0px;
	right: 0px;
	z-index: -1;
`

const CTA = styled.div`
	margin-bottom: 2vw;
	max-width: 650px;
	display: flex;
	flex-wrap: wrap;
	text-align: center;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin-top: 0px;
	margin-left: auto;
	margin-right: auto;
	transition-timing-function: ease-out;
	transition: opacity 0.2s;
`

const CTALogo = styled.img`
	width: 100%;
	max-width: 600px;
	margin-bottom: 15px;
`

const CTAButton = styled.div`
	width:100%;
	color: #f9f9f9;
	background-color: #0063e5;
	padding:17px 0px;
	display: flex;
	font-size: 20px;
	font-weight: 900;
	letter-spacing: 1.5px;
	justify-content: center;
	align-items: center;
	border-radius:5px;
	transition: all 0.2s;
	text-transform: uppercase;

	&:hover {
		background-color: #0483ee;
	}
`
const CTADescription = styled.p`
	width: 100%;
	font-size: 11px;
	line-height:1.5;
	letter-spacing:1.5px;
	color: #f9f9f9;
	margin-bottom: 20px;
`


export default Login;
