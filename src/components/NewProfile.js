import React from "react";
import styled from "styled-components";
import moment from "moment";

const NewDashboardHeader = styled.h2 `
    margin-top: 50px;
    font-family: "Open Sans";
    font-weight: 600;
    font-size: 3.0em;

`

const NewProfileContainer = styled.div `
    display: flex;
    margin-top: 50px;
    justify-content: space-evenly;

`
const NewDispensaryDiv = styled.div `
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
const Ailments = styled.div `
    font-family: "Open Sans";
    font-size: 1.4em;
    width: 60%;
    text-align: left;
    margin-top: 40px;
    background-color: #3D930B;
    color: white;
    padding: 0 30px;
    padding-bottom: 50px;
    margin-left: 20px;

    h4{
        font-size: 1.7em;
        margin-bottom: 25px;
        text-align: center;
        font-weight: 600;

    }
`

const NewProfileDetails = styled.div `
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

const NewProfile = props => {
    const { userData } = props

    if (!userData) {
        return null;
    }

    return (
        <div>
            <NewDashboardHeader>{userData.username}'s Dashboard</NewDashboardHeader>
            <NewProfileContainer>
                <NewProfileDetails>
                    <h4>Profile Info</h4>
                    <p>Name: Jane Doe</p>
                    <p>Email: {userData.email}</p>
                    <p>Birthdate: {userData.birthdate}</p>
                    <p>Favorite Strains: Grandaddy Purple, Banana OG, Northern Lights</p>
                    <button>Update Info</button>
                </NewProfileDetails>
                <NewDispensaryDiv>
                    <h4>Dispensaries near you</h4>
                    <img src="/dispensary.jpg" alt="inside view of Colorado dispensary"/>
                </NewDispensaryDiv>
            </NewProfileContainer>
            <Ailments>
                <h4>Personal Treatments for</h4>
                <p>Anxiety</p>
                <p>Pain Management</p>
                <button>Edit</button>
            </Ailments>
        </div>
    )
}

export default NewProfile;