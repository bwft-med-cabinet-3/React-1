import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

const DashboardHeader = styled.h2`
  margin-top: 50px;
  font-family: "Open Sans";
  font-weight: 600;
  font-size: 3em;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
`;
const DispensaryDiv = styled.div`
  width: 100%;

  img {
    width: 90%;
    height: auto;
  }

  h4 {
    font-family: "Open Sans";
    font-size: 2em;
    margin-bottom: 25px;
  }
`;

const ProfileDetails = styled.div`
  font-family: "Open Sans";
  font-size: 1.4em;
  width: 40%;
  padding: 0 px;
  text-align: left;

  h4 {
    font-family: "Open Sans";
    font-size: 1.7em;
    margin-bottom: 25px;
    text-align: center;
  }

  button {
    margin-top: 30px;
    background-color: white;
    font-family: "Open Sans";
    width: 150px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const Ailments = styled.div`
  font-family: "Open Sans";
  font-size: 1.4em;
  width: 60%;
  text-align: left;
  margin-top: 40px;
  background-color: #3d930b;
  color: white;
  padding: 0 30px;
  padding-bottom: 50px;
  margin-left: 20px;
  border-radius: 10px;

  h4 {
    font-size: 1.7em;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
    padding-top: 10px;
  }

  button {
    margin-top: 30px;
    background-color: white;
    font-family: "Open Sans";
    width: 100px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;

const AvatarContainer = styled.div`
  width: 40%;
  height: 300px;
  button {
    margin-top: 30px;
    background-color: white;
    font-family: "Open Sans";
    width: 100px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const Profile = (props) => {
  const { userData } = props;

  if (!userData) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <DashboardHeader>{userData.username}'s Dashboard</DashboardHeader>
      <ProfileContainer>
        <ProfileDetails>
          <h4>Profile Info</h4>
          <p>Name: Jane Doe</p>
          <p>Email: applepie213@email.com</p>
          <p>Birthdate: August 16, 1992</p>
          <p>Favorite Strains: Grandaddy Purple, Banana OG, Northern Lights</p>
          <button>Update Info</button>
        </ProfileDetails>
        <AvatarContainer>
          <ProfileImage src="/mc-avatar.png" alt="placeholder avatar" />
          <button>Change Photo</button>
        </AvatarContainer>
      </ProfileContainer>
      <Ailments>
        <h4>Personal Treatments for</h4>
        <p>Anxiety</p>
        <p>Pain Management</p>
        <button>Edit</button>
      </Ailments>
      <DispensaryDiv>
        <h4>Dispensaries near you</h4>
        <Slider {...settings}>
          <div>
            <img src="/dispensary.jpg" alt="Colorado Dispensary" />
          </div>
          <div>
            <img src="/dispensary2.png" alt="Marijuana Dispensary" />
          </div>
          <div>
            <img src="/dispensary3.jpg" alt="Local Dispensary" />
          </div>
          <div>
            <img src="/dispensary4.jpg" alt="Cannabis Dispensary" />
          </div>
          <div>
            <img src="/dispensary5.png" alt="Medical Marijuana Dispensary" />
          </div>
          <div>
            <img src="/dispensary6.png" alt="Marijuana Dispensary" />
          </div>
          <div>
            <img src="/dispensary7.jpg" alt="Marijuana Dispensary" />
          </div>
        </Slider>
      </DispensaryDiv>
    </div>
  );
};

export default Profile;
