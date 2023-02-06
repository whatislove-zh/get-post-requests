import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import * as api from "./config";

import { expandReduser } from "./features/expand/expand-slice";
import { positionsReduser } from "./features/getPositions/positions-slice";
import { usersReducer } from "./features/getUsers/users-slice";

export const store = configureStore({
  reducer: {
    expand: expandReduser,
    users: usersReducer,
    positions: positionsReduser,
  },
  devTools: true,
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
