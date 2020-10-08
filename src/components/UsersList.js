import React, { useEffect } from 'react';
import UserItem from './UserItem';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../actions/userActions';

const UsersList = () => {

    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch((userActions.GET_ALL_USERS()))
    }, [dispatch]);

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


// const mapStateToProps = state => ({
//     users: 
// });
// const mapDispatchToProps = userActions;
// export default connect(mapStateToProps,mapDispatchToProps)(UsersList);
export default UsersList;