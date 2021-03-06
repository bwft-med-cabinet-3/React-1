import React from "react";
import styled from "styled-components";
import moment from "moment";
import Slider from "react-slick";

const NewDashboardHeader = styled.h2`
  margin-top: 50px;
  font-family: "Noto Sans SC";
  font-weight: 600;
  font-size: 3em;
`;

const NewProfileContainer = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
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
    font-family: "Noto Sans SC";
    width: 100px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const NewDispensaryDiv = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #3d930b;
  padding: 20px 0;
  padding-bottom: 60px;

  img {
    width: 90%;
    height: auto;
  }

  h4 {
    font-family: "Noto Sans SC";
    font-size: 2em;
    margin-bottom: 25px;
    font-weight: 600;
    text-align: center;
  }
`;
const Ailments = styled.div`
  font-family: "Noto Sans SC";
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
    font-family: "Noto Sans SC";
    width: 100px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const TreatmentCont = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  p {
    color: black;
  }
`;

const StyledFooter = styled.footer`
  background-color: #323232;
  height: 50px;
`;

const NewProfileDetails = styled.div`
  font-family: "Noto Sans SC";
  font-size: 1.4em;
  width: 40%;
  padding: 0 px;
  text-align: left;

  h4 {
    font-family: "Noto Sans SC";
    font-size: 1.7em;
    margin-bottom: 25px;
    text-align: center;
    font-weight: 600;
  }

  button {
    margin-top: 30px;
    background-color: white;
    font-family: "Noto Sans SC";
    width: 150px;
    height: 30px;
    font-size: 0.8em;
    border-radius: 5px;
    border: 1px solid black;
  }
`;

const NewProfile = (props) => {
  const { userData } = props;

  if (!userData) {
    return null;
  }

  const birthday = userData.birthdate;

  const formattedDate = moment(birthday).format("MMMM Do, YYYY");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <NewDashboardHeader>{userData.username}'s Dashboard</NewDashboardHeader>
      <NewProfileContainer>
        <NewProfileDetails>
          <h4>Profile Info</h4>
          <p>Name: Jane Doe</p>
          <p>Email: {userData.email}</p>
          <p>Birthdate: {formattedDate}</p>
          <p>Favorite Strains: Grandaddy Purple, Banana OG, Northern Lights</p>
          <button>Update Info</button>
        </NewProfileDetails>
        <AvatarContainer>
          <ProfileImage src="/avatar1.png" alt="placeholder avatar" />
          <button>Change Photo</button>
        </AvatarContainer>
      </NewProfileContainer>
      <Ailments>
        <h4>Personal Treatments for</h4>
        <TreatmentCont>
        <p>Anxiety</p>
        <p>Pain Management</p>
        <button>Edit</button>
        </TreatmentCont>
      </Ailments>
      <NewDispensaryDiv>
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
      </NewDispensaryDiv>
      <StyledFooter></StyledFooter>
    </div>
  );
};

export default NewProfile;
