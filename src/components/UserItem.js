import React from 'react';


const UserItem = ({ name, email, website }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{website}</td>
        </tr>
    )
}
export default UserItem;