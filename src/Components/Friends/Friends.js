import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Friends = () => {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setFriends(data))
    }, [])
    return (
        <div>
            {
                friends.map(friend =>
                    <div key={friend.id}>
                        <Link
                            to={`${friend.id}`}>{friend.name}
                        </Link>
                    </div>
                )
            }
        </div>
    );
};

export default Friends;