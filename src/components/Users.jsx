import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";

import { UserCard } from "./UserCard";
import { StyledButton } from "./StyledButton";

const USERS_DATA = {
  users: [
    {
      id: 11861,
      name: "123",
      email: "1231231@12312312.12312",
      phone: "380661155555",
      position: "Lawyer",
      position_id: 1,
      registration_timestamp: 1675470252,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/63dda5acacee711861.jpg",
    },
    {
      id: 11860,
      name: "1231231",
      email: "1231323@12312.123",
      phone: "380662312312",
      position: "Lawyer",
      position_id: 1,
      registration_timestamp: 1675468240,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/63dd9dd0c540411860.jpg",
    },
    {
      id: 11859,
      name: "12312",
      email: "12312@12.12312312",
      phone: "380508888888",
      position: "Lawyer",
      position_id: 1,
      registration_timestamp: 1675468007,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/63dd9ce71024411859.jpg",
    },
    {
      id: 1,
      name: "Leanne West",
      email: "onie34@lubowitz.com",
      phone: "+380936050764",
      position: "Content manager",
      position_id: 2,
      registration_timestamp: 1604494937,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596d3bb1.jpeg",
    },
    {
      id: 2,
      name: "Ahmad Rodriguez",
      email: "isadore08@zulauf.biz",
      phone: "+380993215621",
      position: "Security",
      position_id: 3,
      registration_timestamp: 1604494937,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596f0072.jpeg",
    },
    {
      id: 3,
      name: "Jeromy Schultz",
      email: "gladys74@emmerich.com",
      phone: "+380957332233",
      position: "Security",
      position_id: 3,
      registration_timestamp: 1604494937,
      photo:
        "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a659709143.jpeg",
    },
  ],
};

export const Users = () => {
const [users/*, setUsers*/ ] = useState(USERS_DATA.users);

  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(6);

  const showMore = () => {
    setNumberOfItemsToShown((prev) => prev + 3);
  };

  return (
    <Box sx={{ mb: "140px" }} align="center">
      <Typography
        align="center"
        id="getReq"
        variant="h4"
        component="h2"
        sx={{ mb: "50px" }}
      >
        Working with GET request
      </Typography>
      <Grid container spacing="29" align="center" sx={{ mb: "50px" }}>
        {users.slice(0, numberOfitemsShown).map((user) => (
          <Grid item lg={4} sm={6} xs={12} key={user.id}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>

      <StyledButton
        title="Show more"
        onClick={() => {
          showMore();
        }}
      />
    </Box>
  );
};
