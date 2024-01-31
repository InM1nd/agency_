import {Main, Label,List ,List_Item, Link} from './footer.module.jsx'
import React, { useEffect } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const Footer = () => {

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

    //         iteration += 1 / 3;
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
    //     }, 30000); // 60000 миллисекунд = 1 минута

    //     return () => {
    //         clearInterval(minuteInterval);
    //     };
    // }, []);
    
    
    return (
        <Main>
            <Label> oilfaces 2023</Label>
            <List>
            <List_Item><Link href='https://www.instagram.com/oilfaces.agency/' className="link" data-value="instagram">instagram</Link></List_Item>
            <List_Item><Link href='/' className="link" data-value="behance">behance</Link></List_Item>
            <List_Item><Link href='https://www.linkedin.com/company/oilfaces/about/?viewAsMember=true' className="link" data-value="linkedin">linkedin</Link></List_Item>
            </List>
        </Main>
    )
}

export default Footer 