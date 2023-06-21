import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../app/featuers/users/usersSlice';

const Users = () => {
    const users=useSelector((state)=>state.users  )
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
  return (
    <div>
      { users.loading ? <h1>Loading ..</h1> : null }
      {users.users.length ? users.users.map(user => <p key={user.id}>{user.name}</p>) : null}
    </div>
  )
}

export default Users
