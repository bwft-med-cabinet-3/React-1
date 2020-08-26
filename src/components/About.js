import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div `
    background-image: url("./about-pic-1.jpg");
    height: 300px;
    width: auto;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-top: 40px;
`

const Description = styled.h3 `
    font-family: "Open Sans";
    margin: 20px 20px;
    text-align: center;
`

const About = () => {
    return (
        <div>
        <BackgroundImage>

        </BackgroundImage>
        <Description>Seeking an alternative yet natural treatment to maintain your health? We'll guide you and provide you with personalized results to meet your health needs.</Description>

        </div>
    )
}

export default About;