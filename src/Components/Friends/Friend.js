import React from 'react';
import { useParams } from 'react-router-dom';

const Friend = () => {
    let params = useParams();
    return (
        <div>
            hello {params.id}
        </div>
    );
};

export default Friend;