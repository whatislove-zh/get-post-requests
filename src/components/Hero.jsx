import { Typography, Paper, Box } from "@mui/material";

import back from "../assets/pexels-alexandr-podvalny-1227513.jpeg";
import { StyledButton } from "./StyledButton";

const HeroInfo = {
  title: "Test assignment for front-end developer",
  summary:
    "What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.",
};

export const Hero = () => {
  return (
    <Paper
      sx={{
        maxWidth: "1200px",
        height: "650px",
        position: "relative",
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${back})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mb: "140px",
      }}
    >
      <Box width={380} align="center">
        <Typography variant="h4" component="h2" sx={{ mb: "21px" }}>
          {HeroInfo.title}
        </Typography>
        <Typography sx={{ mb: "32px" }}>{HeroInfo.summary}</Typography>
        <StyledButton title={"Sign Up"} anchor="#putReq" />
      </Box>
    </Paper>
  );
};
