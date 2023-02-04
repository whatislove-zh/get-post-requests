import { Avatar, Card, CardContent, Typography, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export const UserCard = (props) => {
  const { name, email, phone, position, photo: avatar } = props.user;

  return (
    <Card align="center" sx={{ maxWidth: 370, height: "254px" }}>
      <Avatar sx={{ m: "20px", width: "70px", height: "70px" }} src={avatar} />
      <CardContent sx={{ padding: 0 }}>
        <Typography sx={{ m: "20px" }}>{name}</Typography>
        <Box sx={{ m: "20px" }}>
          <Typography>{position}</Typography>
          <Tooltip sx={{ cursor: "pointer" }} followCursor title={email}>
            <Typography>{email}</Typography>
          </Tooltip>
          <Typography>{phone}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
