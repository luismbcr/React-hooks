import React from 'react';


const UserItem = ({ name, email, link }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{link}</td>
        </tr>
    )
}
export default UserItem;