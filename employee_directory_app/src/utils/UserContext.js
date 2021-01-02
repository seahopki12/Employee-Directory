import React from "react";

const UserContext = React.createContext({
  user: {},
  users: [],
  sortByIdAsc: () => {},
  sortByIdDesc: () => {},
  sortByLoginAsc: () => {},
  sortByLoginDesc: () => {}
});

export default UserContext;