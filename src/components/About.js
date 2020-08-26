import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const BackgroundImage = styled.div `
    background-image: url("./about-pic-3.jpg");
    height: 300px;
    width: auto;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
    /* margin-top: 10px; */
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
    background-color: #064A53;
    padding: 30px 0;
    color: white;
`

const Main = styled.h2 `
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 2.0em;
    margin-top: 20px;

`

const ImageWidth = styled.div `
    width: 100%;
    height: auto;
    margin-top: 0;
`
const ImageStyling = styled.img `
    width: 100%;
    height: auto;
`

const About = () => {

    const settings= {
        infinite: true,
        autoplay: true,
        speed: 2500,
        autoplaySpeed: 2500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: true,
    };
    return (
        <div>
        <Main>About Us</Main>
        <BackgroundImage>

        </BackgroundImage>
        <Description>Seeking an alternative yet natural treatment to maintain your health? We'll guide you and provide you with personalized results to meet your health needs.</Description>

        <Titles>Who we are</Titles>
        <Slider {...settings}>
            <ImageWidth>
                <ImageStyling src= "/team-1.jpg" alt="view inside office"/>            
            </ImageWidth>
            <ImageWidth>
                <ImageStyling src= "/team-2.jpg" alt="people working together on laptop"/>            
            </ImageWidth>
            <ImageWidth>
                <ImageStyling src= "/team-4.jpg" alt="lab test tubes"/>            
            </ImageWidth>
            <ImageWidth>
                <ImageStyling src= "/team-3.jpg" alt="conference room employee meeting"/>            
            </ImageWidth>
            <ImageWidth>
                <ImageStyling src= "/team-5.jpg" alt="marijuana being weighed for patient"/>            
            </ImageWidth>
        </Slider>
        <Description>MedCabinet's team is comprised of tech industry professionals with a passion for natural health. We feel no one should feel limited to pharmaceutical treatments only to maintain their health. We believe in the wholesome and natural treatments with cannabis and the many benefits it can offer patients. One size doesn't fit all and we have carefully curated this site with individuals like you in mind.</Description>
        <Titles>What we do</Titles>
        <Description>Once you have registered for an account, you'll be asked to fill out your personal profile.</Description>
        <Description>After we receive your profile, our machine learning tech will use the extensive data in our system to match you with the best strains, dosing and treatment methods for your needs.</Description>
        </div>
    );
    }

export default About;