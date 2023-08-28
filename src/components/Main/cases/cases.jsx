// import styles from './cases.module.jsx'


import {Main, Filter, Slider, Search, Industry, Services, Card, Image, Desc, Title, Text } from './cases.module'

const Cases = () => {
    return (
      <Main>

        <Filter>
          <Search>Search</Search>
          <Industry>Industry</Industry>
          <Services>Services</Services>
        </Filter>

        <Slider>

          <Card>
            <Image/>
            <Desc>
              <Title>Skeptic</Title>
              <Text>fitness platform</Text>
            </Desc>
          </Card>

          <Card>
            <Image/>
            <Desc>
              <Title>Postup</Title>
              <Text>career development platform</Text>
            </Desc>
          </Card>
        
        </Slider>
      </Main>
    )
  }
  
  export default Cases