import React, { useState } from 'react';

import {Main, Navigation, List, List_Item, StyledLink } from './about.module.jsx'

import Industries from './industries/industries.jsx';
import Services from './services/services.jsx';
import Approach from './approach/approach.jsx';
import Team from './team/team.jsx';

const About = () => {
    return ( 
            <Main>
                <Navigation>
                <List>
                    <List_Item>
                    <StyledLink to="/about/industries">Industries</StyledLink>
                    </List_Item>
                    <List_Item>
                        <StyledLink to="/about/services">Services</StyledLink>
                    </List_Item>
                    <List_Item>
                        <StyledLink to="/about/approach">Approach</StyledLink>
                    </List_Item>
                    <List_Item>
                        <StyledLink to="/about/team">Team</StyledLink>
                    </List_Item>
                </List>
                </Navigation>  
            </Main>
        
    )
}

export default About