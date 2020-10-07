import React from 'react';
import UserItem from './UserItem';

const UsersList = () => {
    return (
        <table className="container">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                <UserItem name="Luis" email="lmb@example.com" link="www.example.com" />
            </tbody>
        </table>
    )
}
export default UsersList;