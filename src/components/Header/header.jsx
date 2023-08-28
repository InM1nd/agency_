import React, { useState, useRef, useEffect } from 'react';
import {Main, Wrapper, List, List_Item, StyledLink } from './header.module.jsx'



const Header = () => {

    const startText = 'OILFACES';
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";  

    const animateText = (target, originalText) => {
        let iteration = 0;
        let interval = setInterval(() => {
            target.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval); 
            }

            iteration += 1 / 5;
        }, 30);
    };

    useEffect(() => {
        const links = document.querySelectorAll(".link");
        links.forEach(link => {
            link.addEventListener("mouseover", (event) => {
                animateText(event.target, event.target.dataset.value);
            });    
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener("mouseover", animateText); 
            });
        };
    }, []);

    useEffect(() => {
        
        const startLink = document.querySelector(".link");
        if (startLink) {
            animateText(startLink, startLink.dataset.value);
        }

        const minuteInterval = setInterval(() => {
            if (startLink) {
                animateText(startLink, startLink.dataset.value);
            }
        }, 60000); // 60000 миллисекунд = 1 минута

        return () => {
            clearInterval(minuteInterval);
        };
    }, []);

    return (
        <Main>
			<Wrapper> 
			<StyledLink 
                    data-value={startText} 
                    to="/agency_" 
                    className="link"
                > 
                    {startText} 
            </StyledLink>
			</Wrapper>
			<List>
                <List_Item><StyledLink to="/agency_/cases">Cases</StyledLink></List_Item>
                <List_Item><StyledLink to="/agency_/about">About</StyledLink></List_Item>
                <List_Item><StyledLink to="/agency_/greet">Say hi</StyledLink></List_Item>
            </List>
		</Main>
    )
}

export default Header 