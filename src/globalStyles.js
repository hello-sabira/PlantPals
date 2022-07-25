import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1300px;
	margin: 0 auto;
	padding: 0 50px;
	@media screen and (max-width: 960px) {
		padding: 0 30px;
	}
`;

export const Section = styled.div`
	color: #fff;
	padding: 160px 0;
`;

export const Heading = styled.h2`
text-align: center;
padding-top: 1rem;
font-size: clamp(1.3rem, 13vw, 3.1rem);
line-height: 1.06;
letter-spacing: 0.4rem;
margin: auto;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '1c2237')};
	background-color:#b9edd9;

	
`;

export const HeadingTextWrapper = styled.div`
position: relative;

padding: 1rem 1rem 3rem 1rem;
background-color:#b9edd9;
&:before {
	width: 40px;
	height: 2px;
	content: '';
	position: absolute;
	bottom: 0;
	left: 50%;
	background-color: #006666;
	transform: translateX(-50%);
}
`;

export default GlobalStyle;