import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Friend = () => {
    let params = useParams();
    let { id } = params;
    const [friend, setFriend] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => setFriend(data))
    }, [id]);
    return (
        <div>
            {friend.id ?
                <>
                    <h1>{friend.name}</h1>
                    <p>{friend.username}</p>
                    <p>{friend.email}</p>
                    <p>{friend.phone}</p>
                </>
                : <h1>NoMatch</h1>
            }
        </div>
    );
};

export default Friend;