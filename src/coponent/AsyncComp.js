import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { fetchUsers } from './../redux/async/asyncActions'

function AsyncContainer({ userData, fetchUsers }) {
    useEffect(() => {
        fetchUsers()
    }, [])

    return userData.loading ? (
        <h1>Loading..</h1>
    ) : userData.error ? (
        <h2>{userData.error}</h2>
    ) : (
                <div>
                    <h2>User List</h2>
                    <div>
                        {userData &&
                            userData.users &&
                            userData.users.map(user =>
                                <div>
                                    <div>{user.id} ...title:</div>
                                    <div>{user.title}</div>
                                </div>
                            )}
                    </div>
                </div>
            )
}
const matchStateToProps = state => {
    return {
        userData: state.async
    }
}

const matchDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}
export default connect(matchStateToProps, matchDispatchToProps)(AsyncContainer)


