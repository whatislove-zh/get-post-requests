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
} from "@mui/material";
import { StyledButton } from "./StyledButton";
import successImage from "../assets/success-image.svg";
//import avatarDefault from "../assets/photo-cover.svg";



import { useState } from "react";


import { useForm } from "react-hook-form";

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
  
  const [succesRegistered, setSuccesRegistered] = useState(false);
  
  const onSubmit = () => {reset()}

  return (
    <Box
      sx={{
        mb: "140px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {succesRegistered ? (
        <img
          src={successImage}
          height="650px"
          alt="success"
          style={{
            opacity: 0,
            animation: "2s linear 0.2s success-image",
          }}
          onAnimationEnd={(e) => {
            setSuccesRegistered(false);
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
                  value: "+380677183545",
                  message: "Enter a valid phone number",
                },
              })}
            />
            <TextField sx={{ display: "none" }} autoComplete="password" />
            <Box>
              <FormControl sx={{ mt: "43px", mb: "47px", width: "100%" }}>
                <FormLabel>Select your position</FormLabel>
                <RadioGroup >
                  <FormControlLabel
                    value="Frontend developer"
                    control={<Radio />}
                    label="Frontend developer"
                  />
                  <FormControlLabel
                    value="Backend developer"
                    control={<Radio />}
                    label="Backend developer"
                  />
                  <FormControlLabel
                    value="Designer"
                    control={<Radio />}
                    label="Designer"
                  />
                  <FormControlLabel value="QA" control={<Radio />} label="QA" />
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
                    accept="image/*"
                    type="file"
                  />
                </Button>
                <TextField
                  label="Upload your photo"
                  fullWidth
                  helperText={errors?.avatar ? errors.avatar.message : ""}
                  error={errors?.avatar ? true : false}
                  margin="none"
                  {...register("avatar", {
                    pattern: {
                      value:
                        /[(http(s)?):(www)?a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/gi,
                      message: "Enter a valid URL",
                    },
                  })}
                />
              </Box>
            </Box>

            <StyledButton type="submit" title="Sign up" disabled={!isValid} />
          </Box>
        </Box>
      )}
    </Box>
  );
};
