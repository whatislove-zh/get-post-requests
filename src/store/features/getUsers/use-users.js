import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ALL_USERS } from "../../config";
import { loadUsers, selectUsers, selectUsersInfo } from "./users-slice";

export const useUsers = () => {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);
  const { qty, status, error } = useSelector(selectUsersInfo);

  useEffect(() => {
    if (!qty) {
      dispatch(loadUsers(ALL_USERS));
    }
  }, [qty, dispatch]);

  return [users, {status, error, qty}]
};
