import React from 'react';

const ShowFriendDetails = (props) => {
        const {name,username, email, phone} = props.datas;
    return (
        <div>
            <h1>Hello World !</h1>

            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
    );
};

export default ShowFriendDetails;