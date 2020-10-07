import React, { useEffect } from 'react';
import UserItem from './UserItem';

const UsersList = () => {
    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userListResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            if (userListResponse.ok) {
                const jsonData = await userListResponse.json();
                setUsers(jsonData);
            }
        }
        fetchData();
    }, []);

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
                {users.map(({ id, name, email, website }) => <UserItem key={id} name={name} email={email} website={website} />)}

            </tbody>
        </table>
    )
}
export default UsersList;