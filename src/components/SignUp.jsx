import {
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Alert
  
} from "@mui/material";
import { StyledButton } from "./StyledButton";
import successImage from "../assets/success-image.svg";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { usePositions } from "../store/features/getPositions/use-positions";

import { useDispatch } from "react-redux";
import { loadUsers } from "../store/features/getUsers/users-slice";

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });
  const dispatch = useDispatch()

  const [position, setPosition] = useState(null);
  const [file, setFile] = useState(null);
  const [token, setToken] = useState(null);
  const [isRegisterSuccessInfo, setIsRegisterSuccessInfo] = useState(false);

  useEffect(() => {
    if (isRegisterSuccessInfo?.success) {
      reset()
      dispatch(loadUsers())
    }
  }, [isRegisterSuccessInfo, reset, dispatch])

  const [positions] = usePositions();

  const onSubmit = async (data) => {
    const { name, email, phone } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("photo", file);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("position_id", position);
    await postUser(formData)
    
    
  };
  const positionChange = (event) => {
    setPosition(event.target.value);
  };

  const getToken = async () => {
    try {
      const res = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/token"
      );
      const data = await res.json();
      setToken(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const postUser = async (formData) => {
    const requestOptions = {
      method: "POST",
      body: formData,
      headers: { Token: token.token },
    };

    try {
      const res = await fetch(
        "https://frontend-test-assignment-api.abz.agency/api/v1/users",
        requestOptions
      );
      const data = await res.json();
      setIsRegisterSuccessInfo(data);
      console.log("data: ", data);
    } catch (err) {
      console.log("error: ", err.stack);
    }
  };

  return (
    <Box
      sx={{
        mb: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {isRegisterSuccessInfo?.success ? (
        <img
          src={successImage}
          height="650px"
          alt="success"
          style={{
            opacity: 0,
            animation: "2s linear 0.2s success-image",
          }}
          onAnimationEnd={(e) => {
            setIsRegisterSuccessInfo((prev) => ({ ...prev, success: false }));
          }}
        />
      ) : (
        <Box
          sx={{
            opacity: 0,
            animation: "1.5s linear 0.1s success-image",
          }}
          onAnimationEnd={(e) => {
            e.target.style.opacity = 1;
          }}
        >
          <Typography
            variant="h4"
            id="putReq"
            component="h2"
            sx={{ mb: "50px" }}
          >
            Working with PUT request
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            width="380px"
            align="center"
          >
            <TextField
              margin="normal"
              fullWidth
              autoComplete="name"
              label="Your name"
              helperText={errors?.name ? errors.name.message : ""}
              error={errors?.name ? true : false}
              {...register("name", {
                required: "Enter your name",
                minLength: {
                  value: 3,
                  message: "Input at least three (3) characters",
                },
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              autoComplete="email"
              label="Email"
              helperText={errors?.email ? errors.email.message : ""}
              error={errors?.email ? true : false}
              {...register("email", {
                required: "Enter your email",
                pattern: {
                  value: /^[\w-.-]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Enter valid email",
                },
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              autoComplete="tel"
              label="Phone"
              helperText={errors?.phone ? errors.phone.message : ""}
              error={errors?.phone ? true : false}
              {...register("phone", {
                required: "Enter your phone",
                minLength: {
                  value: 7,
                  message: "Enter a valid phone number",
                },
                pattern: {
                  value:
                    /((\+38)?\(?\d{3}\)?[\s-]?(\d{7}|\d{3}[\s-]\d{2}[\s-]\d{2}|\d{3}-\d{4}))/g,
                  message: "Enter a valid phone number",
                },
              })}
            />
            <TextField sx={{ display: "none" }} autoComplete="password" />
            <Box>
              <FormControl sx={{ mt: "43px", mb: "47px", width: "100%" }}>
                <FormLabel>Select your position</FormLabel>
                <RadioGroup value={position} onChange={positionChange}>
                  {positions.map((position) => (
                    <FormControlLabel
                      key={position.id}
                      value={position.id}
                      control={<Radio />}
                      label={position.name}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
              <Box
                sx={{
                  height: "56px",
                  display: "flex",
                  alignItems: "flex",
                  flexDirection: "row",
                  mb: "50px",
                }}
              >
                <Button
                  component="label"
                  variant="outlined"
                  width="80px"
                  disabled={errors?.avatar || watch("avatar") ? true : false}
                >
                  Upload
                  <input
                    hidden
                    accept=".jpg, .jpeg"
                    type="file"
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                      getToken();
                    }}
                  />
                </Button>
                <TextField
                  helperText={file !== null ? "" : "File is required"}
                  label="Upload your photo"
                  fullWidth
                  margin="none"
                />
              </Box>
            </Box>

            <StyledButton
              type="submit"
              title="Sign up"
              disabled={!(isValid && token !== null && position !== null)}
            />
            {isRegisterSuccessInfo?.success === false ? <Alert sx={{mt:"25px"}} severity="error">{isRegisterSuccessInfo.message}</Alert> : ""}

          </Box>
        </Box>
      )}
    </Box>
  );
};
