
export const GET_ALL_USERS = () => async (dispatch) => {
    const userListResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    if (userListResponse.ok) {
        const jsonData = await userListResponse.json();
        dispatch({
            type: 'GET_ALL_USERS',
            payload: jsonData
        })
    }
}