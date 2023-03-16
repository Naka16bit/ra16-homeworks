import React from "react";
import {useState, useEffect} from "react";

function List({selected, onSelectUser}) {
    const [usersList, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_USERS_URL + "users.json");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const usersList = await response.json();
                setList(usersList);
            } catch (e) {
                console.error(e);
            };
        };
        fetchData();
    }, []);

    return (
        <ul className="users-list">
            {usersList.map((item) => (
                <li className="item" key={item.id} id={item.id} onClick={onSelectUser}>
                    {item.name}
                </li>
            ))}
        </ul>

    );
}

export default List;