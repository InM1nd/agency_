// @import '../main.scss';
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const Main = styled.section`
	display: flex;
	/* justify-content: center; */
    flex-shrink: 0;
	
	/* background-color: $main-background-color; */
	height: 10vh; 
	width: 100%;

	

	position:fixed;
	z-index: 1;
`
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin-left: 50px;
	/* margin-top: 10px; */

`
const List = styled.ul`
	display: none; //remove later

	/* display: flex; */
	justify-content: flex-end;

	width: 100%;
`
const List_Item = styled.li`
	
`
const StyledLink = styled(Link)`
	font-family: 'Bebas Neue', sans-serif;
	font-size: 120px;
	font-weight: 700;
  	text-transform: uppercase;
`

export {Main, Wrapper, List, List_Item, StyledLink}