import React from "react";
import {useState, useEffect} from "react";

function Details({info}) {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_USERS_URL + info.id + ".json");
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                const user = await response.json();
                setUser(user);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            };
        };
        fetchData();
    }, [info]);

    return (
        <div>
            {loading ? (
                <p>LOADING</p>
            ) : (
                <div className="user-info">
                    <div>
                        <img src={user.avatar} alt={user.name}/>
                    </div>
                    <div>Name: {user.name}</div>
                    <div>City: {user.details.city}</div>
                    <div>Company: {user.details.company}</div>
                    <div>Position: {user.details.position}</div>
                </div>
            )}
        </div>
    );
}

export default Details;
