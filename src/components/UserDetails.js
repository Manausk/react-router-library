import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const { userId } = useParams();
  // const userId = params.userId;
  return <div>Details about user {userId}</div>;
};
