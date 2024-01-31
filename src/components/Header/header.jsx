import React, { useState, useRef, useEffect } from 'react';
import {Main, Wrapper, List, List_Item, StyledLink, StyledLinkLogo, Box } from './header.module.jsx'



const Header = () => {

    const startText = 'oilfaces';
    // const letters = "abcdefghijklmnopqrstuvwxyz";  

    // const animateText = (target, originalText) => {
    //     let iteration = 0;
    //     let interval = setInterval(() => {
    //         target.innerText = originalText
    //             .split("")
    //             .map((letter, index) => {
    //                 if (index < iteration) {
    //                     return originalText[index];
    //                 }
    //                 return letters[Math.floor(Math.random() * 26)];
    //             })
    //             .join("");

    //         if (iteration >= originalText.length) {
    //             clearInterval(interval); 
    //         }

    //         iteration += 1 / 5;
    //     }, 30);
    // };

    // useEffect(() => {
    //     const links = document.querySelectorAll(".link");
    //     links.forEach(link => {
    //         link.addEventListener("mouseover", (event) => {
    //             animateText(event.target, event.target.dataset.value);
    //         });    
    //     });

    //     return () => {
    //         links.forEach(link => {
    //             link.removeEventListener("mouseover", animateText); 
    //         });
    //     };
    // }, []);

    // useEffect(() => {
        
    //     const startLink = document.querySelector(".link");
    //     if (startLink) {
    //         animateText(startLink, startLink.dataset.value);
    //     }

    //     const minuteInterval = setInterval(() => {
    //         if (startLink) {
    //             animateText(startLink, startLink.dataset.value);
    //         }
    //     }, 60000); // 60000 миллисекунд = 1 минута

    //     return () => {
    //         clearInterval(minuteInterval);
    //     };
    // }, []);

    return (
        <Main>
			<Wrapper> 
			<StyledLinkLogo 
                    data-value={startText} 
                    to="/agency_" 
                    className="link"
                > 
                    {startText}
            </StyledLinkLogo>
            <Box>
                a creative collective, working remotely from different parts of the world, effectively cooperating as a single creative unit.
            </Box>
			</Wrapper>
			<List>
                <List_Item><StyledLink to="#">say hi</StyledLink></List_Item>
                <List_Item><StyledLink to="#">works</StyledLink></List_Item>
                <List_Item><StyledLink to="#">services</StyledLink></List_Item>
                <List_Item><StyledLink to="#">meet us</StyledLink></List_Item>
            </List>
		</Main>
    )
}

export default Header 