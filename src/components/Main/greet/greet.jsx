// import styles from './greet.module.jsx'
import {Main, List_Heading, List, List_Item} from './greet.module'

const Greet = () => {
    return ( 
        <Main>
            <List_Heading>socials</List_Heading>
            <List>
                <List_Item>linkedin</List_Item>
                <List_Item>instagram</List_Item>
                <List_Item>behance</List_Item>
            </List>
            <List_Heading>say hi</List_Heading>
            <List>
                <List_Item>hi@oilfaces.com</List_Item>
            </List>
            <List_Heading>out team in</List_Heading>
            <List>
                <List_Item>Amsterdam</List_Item>
                <List_Item>Vienna</List_Item>
                <List_Item>Tokyo</List_Item>
            </List>
        </Main>
    )
}

export default Greet