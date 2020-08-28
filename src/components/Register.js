import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { NavLink, useHistory } from "react-router-dom";
import formSchema from "./validation/registrationSchema";
import styled from "styled-components";
import ReactDatePicker from "react-datepicker";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-top: 45px;
  height: 600px;
  box-shadow: 0 0 10px #262626;
  background-color: #d6d6d6;

  h2 {
    color: #323232;
    font-family: "Noto Sans SC";
    font-weight: 600;
    padding: 20px 0;
    font-size: 2em;
    margin-bottom: 20px;
  }
`;

const InputField = styled.input`
  width: 230px;
  height: 40px;
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: whitesmoke;
  font-family: "Noto Sans SC";

  &:hover {
    border: 3px solid #3d930b;
    background-color: white;
    box-shadow: 0 0 1vw #3d930b;

    &:focus {
      border: 3px solid #3d930b;
      background-color: white;
      box-shadow: 0 0 1vw #3d930b;
    }
  }
`;

const StyledButton = styled.button`
  width: 200px;
  height: 40px;
  font-family: "Noto Sans SC";
  font-size: 1.2em;
  background-color: #3d930b;
  border-radius: 5px;
  border: 1px solid #165f10;
  margin-bottom: 15px;
  box-shadow: 0 0 1vw #165f10;

  &:disabled {
    background-color: #737473;
    border: 1px solid black;
    box-shadow: none;
  }
`;

const StyledRedirect = styled.p`
  font-family: "Noto Sans SC";
  margin-top: 10px;
  padding: 0 40px;
`;

const Errors = styled.div`
  margin-top: 30px;
`;

const DOB = styled.div`
  padding: 10px 0;
  font-family: "Noto Sans SC";
`;

const StyledTerms = styled.h4`
  font-family: "Noto Sans SC";
  margin-top: 15px;
`;

const Checkbox = styled.label`
   font-family: "Noto Sans SC";
   margin: 10px 0; 
`;

//set initial form shape and values
const initialRegisterValues = {
  username: "",
  email: "",
  birthdate: "", //insert datepicker here
  password: "",
  terms: false, //checkbox
};

const initialRegisterErrors = {
  username: "",
  email: "",
  birthdate: "", //insert datepicker here
  password: "",
  terms: "", //checkbox
};

const intialRegistered = [];

//set submit button to disabled
const disableButton = true;

const Register = ({setUserData}) => {
  const [registerValues, setRegisterValues] = useState(initialRegisterValues);
  const [newUsers, setNewUsers] = useState(intialRegistered);
  const [disabled, setDisabled] = useState(disableButton);
  const [registerErrors, setRegisterErrors] = useState(initialRegisterErrors);

  const history = useHistory();

  //fetching current user list data
  const getUsers = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {
        setNewUsers(response.data.data);
      })
      .catch((error) => {
        debugger;
      });
  };

  //posting new user to database and console logging current users data
  const postNewUser = (user) => {
    axios
      .post("https://reqres.in/api/users", user)
      .then((response) => {
        setUserData(response.data);
        history.push("/new-profile");
      })
      .catch((error) => {
        console.log("error", error);
        debugger;
      })
  };

  //functionaity to input info while validating registration form has all required info
  const updateRegisterInput = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setRegisterErrors({
          ...registerErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setRegisterErrors({
          ...registerErrors,
          [name]: err.errors[0],
        });
      });
    setRegisterValues({
      ...registerValues,
      [name]: value,
    });
  };

  //birthdate input
  const updateBirthdate = (birthdate) => {
    updateRegisterInput("birthdate", birthdate);
  };

  //submit button functionality
  const handleSignUp = () => {
    const newUser = {
      username: registerValues.username.trim(),
      email: registerValues.email.trim(),
      birthdate: registerValues.birthdate,
      password: registerValues.password.trim(),
    };
    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    formSchema.isValid(registerValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [registerValues]);

  const onSignUp = (event) => {
    event.preventDefault();
    handleSignUp();
  };

  const onCheckboxChange = (event) => {
    const { name, checked } = event.target;
    updateRegisterInput(name, checked);
  };

  const onRegisterInput = (event) => {
    const { name, value } = event.target;
    updateRegisterInput(name, value);
  };

  return (
    <FormContainer onSubmit={onSignUp}>
      <h2>Sign Up Here</h2>
      <label>
        <InputField
          value={registerValues.username}
          onChange={onRegisterInput}
          name="username"
          type="text"
          placeholder="Username"
        />
      </label>
      <label>
        <InputField
          value={registerValues.email}
          onChange={onRegisterInput}
          name="email"
          type="email"
          placeholder="Email"
        />
      </label>
      <label>
        <InputField
          value={registerValues.password}
          onChange={onRegisterInput}
          name="password"
          type="password"
          placeholder="Password"
        />
      </label>
      <label>
        <DOB>
          Date of Birth&nbsp;
          <ReactDatePicker
            selected={registerValues.birthdate}
            onChange={updateBirthdate}
            name="birthdate"
          />
        </DOB>
      </label>
      <StyledTerms>
        By checking here you agree to MedCabinet's
        <button
          style={{
            fontFamily: "Noto Sans SC",
            fontSize: "1.0em",
            color: "#3D930B",
            textDecoration: "none",
            fontWeight: "600",
            border: "none",
            backgroundColor: "#D6D6D6",
          }}
        >
          Privacy Policy
        </button>{" "}
        and{" "}
        <button
          style={{
            fontFamily: "Noto Sans SC",
            fontSize: "1.0em",
            color: "#3D930B",
            textDecoration: "none",
            fontWeight: "600",
            border: "none",
            backgroundColor: "#D6D6D6",
          }}
        >
          Terms of Use
        </button>
      </StyledTerms>
      <Checkbox>
        I agree
        <input
          type="checkbox"
          name="terms"
          checked={registerValues.terms}
          onChange={onCheckboxChange}
        />
      </Checkbox>
      <StyledButton name="submit" disabled={disabled}>Register</StyledButton>
      <StyledRedirect>
        Already have an account?{" "}
        <NavLink
          to="/login"
          style={{
            color: "#3D930B",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Login here.
        </NavLink>
      </StyledRedirect>

      <Errors className="errors">
        <div>{registerErrors.username}</div>
        <div>{registerErrors.password}</div>
        <div>{registerErrors.email}</div>
        <div>{registerErrors.birthdate}</div>
        <div>{registerErrors.terms}</div>
      </Errors>
    </FormContainer>
  );
};

export default Register;
