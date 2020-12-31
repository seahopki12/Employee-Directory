import axios from "axios";

// Export an object containing methods we'll use for accessing the random user API

  function getUsers() {
    return new Promise((resolve, reject) => {
      axios
        .get("https://api.github.com/orgs/github/public_members")
        .then(res => {
          const users = res.data;
          console.log(res.data);
          const results = users.map(user => {
            return {
              login: user.login,
              image: user.avatar_url
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  };

  export default getUsers();