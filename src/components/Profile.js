import React from "react";
import styled from "styled-components";

const DashboardHeader = styled.h2 `
    margin-top: 50px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 3.0em;

`

const ProfileContainer = styled.div `
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;

`
const DispensaryDiv = styled.div `
    width: 40%;

    img {
        width: 300px;
        height: auto;
    }

    h4 {
        font-family: "Open Sans";
        font-size: 2.0em;
        margin-bottom: 25px;
    }
`

const ProfileDetails = styled.div `
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

`

const Profile = props => {
    const { userData } = props

    if (!userData) {
        return null;
    }

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
                </ProfileDetails>
                <DispensaryDiv>
                    <h4>Dispensaries near you</h4>
                    <img src="/dispensary.jpg" alt="inside view of Colorado dispensary"/>
                </DispensaryDiv>
            </ProfileContainer>
        </div>
    )
}

export default Profile;