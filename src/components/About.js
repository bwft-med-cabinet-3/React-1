import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResponsiveView = styled.div`
  display: block;
  @media (min-width: 1000px) {
    display: none;
  }
`;

const DesktopView = styled.div`
  display: none;
  @media (min-width: 1000px) {
    display: block;
    background-image: url("./about-pic-3.jpg");
    background-size: cover;
    background-position: center;
    height: 700px;
  }
`;

const BackgroundImage = styled.div`
  background-image: url("./about-pic-3.jpg");
  height: 300px;
  width: auto;
  background-size: contain;
  background-position: bottom;
  background-repeat: no-repeat;
  @media (min-width: 600px) {
    background-size: cover;
    background-position: center;
    height: 40vh;
  }
  @media (min-width: 800px) {
    height: 60vh;
    background-position: bottom;
  }
`;

const Main1 = styled.h2`
  font-family: "Noto Sans SC";
  font-weight: 600;
  color: white;
  font-size: 2.6em;
  padding-top: 40px;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Description1 = styled.p`
  font-family: "Noto Sans SC";
  color: white;
  font-size: 1.7em;
  padding: 0 100px;
  margin-top: 150px;
`;

const Description = styled.p`
  font-family: "Noto Sans SC";
  margin: 20px 20px;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 1.5em;
    margin-bottom: 60px;
  }
  @media (min-width: 800px) {
    padding-top: 30px;
  }
`;

const Titles = styled.h3`
  font-family: "Noto Sans SC";
  font-weight: 600;
  font-size: 2em;
  background-color: #3d930b;
  padding: 30px 0;
  color: white;
  @media (min-width: 600px) {
    font-size: 2.2em;
  }
  @media (min-width: 800px) {
    font-size: 2.4em;
  }
`;

const Main = styled.h2`
  font-family: "Noto Sans SC";
  font-weight: 600;
  font-size: 2em;
  margin-top: 20px;
  @media (min-width: 600px) {
    font-size: 2.4em;
  }
  @media (min-width: 800px) {
    margin-top: 40px;
    font-size: 2.6em;
  }
`;

const ImageWidth = styled.div`
  width: 100%;
  height: auto;
  @media (min-width: 600px) {
    height: 40vh;
  }
  @media (min-width: 800px) {
    height: 60vh;
  }
  @media (min-width: 1000px) {
    height: 70vh;
  }
`;

const ImageStyling = styled.img`
  width: 100%;
  height: auto;
  @media (min-width: 600px) {
    height: 40vh;
  }
  @media (min-width: 800px) {
    height: 60vh;
  }
  @media (min-width: 1000px) {
    height: 70vh;
  }
`;

const Graph = styled.div`
  background-image: url("/graph-1.png");
  background-size: cover;
  background-position: center;
  height: 60vh;
  @media (min-width: 600px) {
    height: 40vh;
  }
  @media (min-width: 800px) {
    height: 60vh;
  }
`;

const About = () => {
  const settings = {
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
      <ResponsiveView>
        <Main>About Us</Main>
        <BackgroundImage></BackgroundImage>
        <Description>
          Seeking an alternative yet natural treatment to maintain your health?
          We're here to help. We'll provide you with personalized results to
          meet your health needs.
        </Description>
      </ResponsiveView>

      <DesktopView>
        <Main1>About Us</Main1>
        <FlexContainer>
          <Description1>
            Seeking an alternative yet natural treatment to maintain your
            health?
          </Description1>
          <Description1>
            We're here to help. We'll provide you with personalized results to
            meet your health needs.
          </Description1>
        </FlexContainer>
      </DesktopView>

      <Titles>Who we are</Titles>
      <Slider {...settings}>
        <ImageWidth>
          <ImageStyling src="/team-1.jpg" alt="view inside office" />
        </ImageWidth>
        <ImageWidth>
          <ImageStyling
            src="/team-2.jpg"
            alt="people working together on laptop"
          />
        </ImageWidth>
        <ImageWidth>
          <ImageStyling src="/team-4.jpg" alt="lab test tubes" />
        </ImageWidth>
        <ImageWidth>
          <ImageStyling
            src="/team-3.jpg"
            alt="conference room employee meeting"
          />
        </ImageWidth>
        <ImageWidth>
          <ImageStyling
            src="/team-5.jpg"
            alt="marijuana being weighed for patient"
          />
        </ImageWidth>
      </Slider>
      <Description>
        MedCabinet's team is comprised of tech industry professionals with a
        passion for natural health. We feel no one should feel limited to
        pharmaceutical treatments only to maintain their health. We believe in
        the wholesome and natural treatments with cannabis and the many benefits
        it can offer patients. One size doesn't fit all and we have carefully
        curated this site with individuals like you in mind.
      </Description>
      <Titles>What we do</Titles>
      <Graph></Graph>
      <Description>
        Once you have registered for an account, you'll be asked to fill out
        your personal profile.
        <br />
        <br />
        After we receive your profile, our machine learning tech will use the
        extensive data in our system to match you with the best strains, dosing
        and treatment methods for your needs.
      </Description>
    </div>
  );
};

export default About;
