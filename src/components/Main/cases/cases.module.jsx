// @import '../../main.scss';
import styled from '@emotion/styled'

const Main = styled.section `
    /* display: flex;
    justify-content: center;
    align-items: center; */

    box-sizing: border-box;
    height: 100%;

    margin: 50px ;   // temporary

     @media (max-width:768px) {

     }
     
     @media (max-width:550px) {
  
     }
`

const Filter = styled.div`

`

const Slider = styled.div`
  display: flex;

`

const Search = styled.div`

`

const Industry = styled.div`

`

const Services = styled.div`

`

const Card = styled.div`

  &:not(:first-child){
    padding-left: 20px;
  }
`

const Image = styled.img`

`

const Desc = styled.div`

`

const Title = styled.div`

`

const Text = styled.div`

`

export {Main, Filter, Slider, Search, Industry, Services, Card, Image, Desc, Title, Text }