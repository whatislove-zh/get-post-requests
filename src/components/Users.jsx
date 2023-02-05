import { Grid, Typography, Box } from "@mui/material";
import { useState } from "react";

import { UserCard } from "./UserCard";
import { StyledButton } from "./StyledButton";
import { useDispatch, useSelector } from "react-redux";
import { setExpand } from "../store/features/expand/expand-slice";
import { useUsers } from "../store/features/getUsers/use-users";
import { Loader } from "./Loader";

export const Users = () => {
  const [users, { error, status }] = useUsers();

  const [numberOfitemsShown, setNumberOfItemsToShown] = useState(6);

  const dispatch = useDispatch();

  const isExpand = useSelector((state) => state.expand);

  const showMore = () => {
    if (numberOfitemsShown + 6 <= users.length) {
      setNumberOfItemsToShown(numberOfitemsShown + 6);
    } else {
      setNumberOfItemsToShown(users.length);
      dispatch(setExpand(false));
    }
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
      {error && <Typography>{error.message}</Typography>}
      {status === "loading" && <Loader />}
      {status === "received" && (
        <Grid container spacing="29" align="center" sx={{ mb: "50px" }}>
          {users.slice(0, numberOfitemsShown).map((user) => (
            <Grid item lg={4} sm={6} xs={12} key={user.id}>
              <UserCard user={user} />
            </Grid>
          ))}
        </Grid>
      )}

      <StyledButton
        title={isExpand ? "Show more" : "No more users"}
        disabled={isExpand ? false : true}
        onClick={() => {
          showMore();
        }}
      />
    </Box>
  );
};
