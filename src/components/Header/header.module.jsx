// @import '../main.scss';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Main = styled.section`
	display: flex;
  flex-shrink: 0;
	width: 100%;
	position:fixed;
	z-index: 1;
	padding: 25px 45px ;
`
const Wrapper = styled.div`
	display: flex;
	align-items: flex-start;
`
const List = styled.ul`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	gap: 10%;
`
const List_Item = styled.li`

`

const StyledLinkLogo = styled(Link)`
	color: #D9D9D9;
	font-family: "Times Now";
	font-size: 45px;
	font-style: italic;
	font-weight: 700;
	line-height: normal;
	text-transform: lowercase;

	display: flex;
	align-items: center; 
`

const StyledLink = styled(Link)`
	color: #FFF;
	font-family: "HelveticaNeueCyr";
	font-size: clamp(1rem, 0.7359rem + 0.8451vw, 1.75rem);
	font-style: normal;
	font-weight: 400;
	line-height: 110%; /* 30.8px */
	letter-spacing: -0.84px;
	text-transform: uppercase;

	display: flex;
	align-items: center; 
`


const Box = styled.div`
	padding-left: 15%;

	color: #D9D9D9;

	font-family: "Times Now";
	font-size: clamp(1rem, 0.8239rem + 0.5634vw, 1.5rem);
	font-style: italic;
	font-weight: 600;
	line-height: normal;
	text-transform: lowercase;

`

export {Main, Wrapper, List, List_Item, StyledLink, StyledLinkLogo, Box}