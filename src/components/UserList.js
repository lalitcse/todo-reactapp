import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'


const UserList = () => {
    const { users, removeUser} = useContext(GlobalContext)

    console.log(users)
    return (
        <ListGroup style={{marginTop: "20px"}}>
            {users.map(user => (
                <ListGroupItem className='d-flex' key={user.id}>
                    <strong>{user.name}</strong>
                    <div className="ms-auto">
                        <Link className="btn btn-warning mx-1" to={`/edit/${user.id}`}>Edit</Link>
                        <Button onClick={() => removeUser(user.id)} color="danger">Delete</Button>
                    </div>
                </ListGroupItem>
            ))}
            
        </ListGroup>
    )
}

export default UserList
