import React from "react";
import styled from "styled-components";

const BackgroundImage = styled.div `
    background-image: url("./about-pic-3.jpg");
    height: 300px;
    width: auto;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    margin-top: 40px;
`

const Description = styled.p `
    font-family: "Open Sans";
    margin: 20px 20px;
    text-align: center;
`

const Titles = styled.h3 `
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 2.0em;
`

const About = () => {
    return (
        <div>
        <BackgroundImage>

        </BackgroundImage>
        <Description>Seeking an alternative yet natural treatment to maintain your health? We'll guide you and provide you with personalized results to meet your health needs.</Description>

        <Titles>Who we are</Titles>
        <Description>MedCabinet team is comprised of tech industry professionals with a passion for natural health. We feel no one should feel limited to pharmaceutical treatments only to maintain their health. We believe in the wholesome and natural treatments with cannabis and the many benefits it can offer patients. One size doesn't fit all and we have carefully curated this site with individuals like you in mind.</Description>
        <Titles>What we do</Titles>
        <Description>Once you have registered for an account, you'll be asked to fill out your personal profile.</Description>
        <Description>After we receive your profile, our machine learning tech will use the extensive data in our system to match you with the best strains, dosing and treatment methods for your needs.</Description>
        </div>
    )
}

export default About;