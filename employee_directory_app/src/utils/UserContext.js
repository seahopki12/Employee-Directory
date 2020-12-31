import React from "react";

const UserContext = React.createContext({
  user: {},
  users: [],
  createTable: () => {}
});

export default UserContext;