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

    // function sortByLoginAsc () {
    //     users.sort();
    // };

    // function sortByLoginDesc () {
    //     users.reverse();
    // };

    function sortByIdAsc () {
        setUsers([...users].sort((a,b) => a.id - b.id));
    };

    function sortByIdDesc () {
        setUsers([...users].sort((a,b) => b.id - a.id));
    };

    return (
        <UserContext.Provider value={{ user, users, sortByIdAsc, sortByIdDesc}}>
            <div>
                <Dropdowns />
                <Table />
            </div>
        </UserContext.Provider>
    );
}

export default Directory;