import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/UserContext";
import Dropdowns from "../components/Dropdowns";
import Table from "../components/Table";

function Directory() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({});
    // const [userIndex, setUserIndex] = useState(0);

    useEffect(() => {
        loadUsers();
    }, []);

    function loadUsers() {
        API.getUsers()
            .then(users => {
                setUsers(users);
                setUser(users[0]);
            })
            .catch(err => console.log(err));
    };

    return (
        <UserContext.Provider value={{ user, users}}>
            <div>
                <Dropdowns />
                <Table />
            </div>
        </UserContext.Provider>
    );
}

export default Directory;