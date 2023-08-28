import React, { useRef, useEffect } from 'react';

import {Main, Left_Side, Right_Side, Logo, Under_Logo, Desc, List_Heading, List, List_Item} from './hero.module'

const Hero = () => {
  return (
    <Main>
      <Left_Side>
        <Logo>LOGO</Logo>
        <Under_Logo>creative agency</Under_Logo>
        <Desc>We help startups in shaping their businesses to create successful brands.</Desc>
      </Left_Side>

      <Right_Side>
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
      </Right_Side>
    </Main>
  );
};

export default Hero;