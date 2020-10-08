import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';

const UsersList = ({users,GET_ALL_USERS}) => {

    useEffect(() => {
        GET_ALL_USERS();
    }, [GET_ALL_USERS]);

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


const mapStateToProps = state => ({
    users: state.userReducer.users
})
const mapDispatchToProps = userActions;
export default connect(mapStateToProps,mapDispatchToProps)(UsersList);