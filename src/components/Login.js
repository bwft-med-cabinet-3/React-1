import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import loginSchema from "./validation/loginSchema";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { f2bd } from '@fortawesome/free-solid-svg-icons';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 300px;
  margin: 0 auto;
  margin-top: 80px;
  height: 500px;
  box-shadow: 0 0 10px #262626;
  background-color: #d6d6d6;

  h2 {
    color: #064a53;
    font-family: "Open Sans";
    font-weight: 600;
    padding: 20px 0;
    font-size: 2em;
    margin-bottom: 40px;
  }
`;

const InputField = styled.input`
  width: 230px;
  height: 40px;
  border: none;
  margin-bottom: 20px;
  border-radius: 5px;
  background-color: whitesmoke;
  font-family: "Open Sans";

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
  font-family: "Open Sans";
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
  font-family: "Open Sans";
  margin-top: 10px;
  padding: 0 30px;
`;

const Errors = styled.div`
  margin-top: 20px;
`;

//set initial form shape and values
const initialLoginValues = {
  username: "",
  password: "",
};

const initialLoginErrors = {
  username: "",
  password: "",
};

//set submit button to disabled
const disableButton = true;

const Login = ({ setUserData }) => {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [disabled, setDisabled] = useState(disableButton);
  const [loginErrors, setLoginErrors] = useState(initialLoginErrors);

  const history = useHistory();

  //fetching current users credentials data
  const getCredentials = () => {
    axios
      .get("https://reqres.in/api/users")
      .then((response) => {})
      .catch((error) => {
        debugger;
      });
  };

  //posting new login credentials to database
  const postCredentials = (credentials) => {
    axios
      .post("https://reqres.in/api/users", credentials)
      .then((response) => {
        setUserData(response.data);
        history.push("/profile");
      })
      .catch((error) => {
        console.log("error", error);
        debugger;
      });
  };

  //functionaity to input info while validating login form has all required info
  const loginInput = (name, value) => {
    yup
      .reach(loginSchema, name)
      .validate(value)
      .then((valid) => {
        setLoginErrors({
          ...loginErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setLoginErrors({
          ...loginErrors,
          [name]: err.errors[0],
        });
      });
    setLoginValues({
      ...loginValues,
      [name]: value,
    });
  };

  //login button functionality
  const handleLogin = () => {
    const loginDetails = {
      username: loginValues.username.trim(),
      password: loginValues.password.trim(),
    };
    postCredentials(loginDetails);
  };

  useEffect(() => {
    getCredentials();
  }, []);

  //enable button when login passes validation
  useEffect(() => {
    loginSchema.isValid(loginValues).then((valid) => {
      setDisabled(!valid);
    });
  });

  const onLogin = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const onLoginInput = (event) => {
    const { name, value } = event.target;
    loginInput(name, value);
  };

  return (
    <FormContainer onSubmit={onLogin}>
      <h2>Sign In</h2>
      <label>
        {/* Username&nbsp; */}
        <InputField
          value={loginValues.username}
          onChange={onLoginInput}
          name="username"
          type="text"
          placeholder="Username"
        />
      </label>
      <label>
        {/* Password&nbsp; */}
        <InputField
          value={loginValues.password}
          onChange={onLoginInput}
          name="password"
          type="password"
          placeholder="Password"
        />
      </label>
      <StyledButton disabled={disabled}>Login</StyledButton>
      <StyledRedirect>
        Don't have an account?{" "}
        <NavLink
          to="/register"
          style={{
            color: "#3D930B",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Register here.
        </NavLink>
      </StyledRedirect>

      <Errors className="errors">
        <div>{loginErrors.username}</div>
        <div>{loginErrors.password}</div>
      </Errors>
    </FormContainer>
  );
};

export default Login;
