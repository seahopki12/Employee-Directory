import React, { useContext } from "react";
import UserContext from "../../utils/UserContext";

function LoginCol() {
    const { user } = useContext(UserContext);
    return (
      <div className="col-md-3">
        <h4>{user.login}</h4>
      </div>
    );
  }
  
  export default LoginCol;