// @import '../main.scss';
import styled from '@emotion/styled'

const Main = styled.section`
    display: flex;

    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    /* background-color: #fff; */

    position:fixed;
    bottom: 0;
    z-index: 1;

    font-family: 'Bebas Neue', sans-serif;
    
    height: 6vh; 
    width: 100%;

      @media (max-width:1100px) {
      }
      @media (max-width:1024px) {
      }
      @media (max-width:768px) {
      }
      @media (max-width:550px) {
        display: flex;
        align-items: center;
        height: 100%;

        position: inherit;
       
      }
    `

const Label = styled.div `
  display: none;  // remove later
`

const List = styled.ul`
  width: 100%;

  display: flex;
  justify-content: flex-start;

  margin-left: 50px;
  
`

const List_Item = styled.ul`
  
  font-size: 40px;
  text-transform: uppercase;

  &:not(:first-child){
    padding-left: 30px;
  }
`

const Link = styled.a`
  
`

export {Main, Label, List, List_Item, Link};