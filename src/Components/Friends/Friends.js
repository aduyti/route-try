import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
    }, [])
    const navigate = useNavigate();
    const clickedFrnd = id => {
        // navigate(`/friend/${id}`);
        navigate(`${id}`);
    }
    return (
        <div>
            {
                friends.map(friend =>
                    <div key={friend.id} onClick={() => clickedFrnd(friend.id)}>
                        {friend.name}
                    </div>
                )
            }
            <Outlet />
        </div>
    );
};

export default Friends;