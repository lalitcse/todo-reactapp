import React, { useContext, useState, useEffect } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'

const EditUser = (props) => {
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    const { users, editUser } = useContext(GlobalContext)
    const history = useHistory()
    const currentId = props.match.params.id;

    useEffect(() => {
        const userId = currentId
        // console.log(typeof Number(userId), users, users.find(user => Number(user.id) === Number(userId)))
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
        console.log(selectedUser)
    }, [currentId, users])

    const onSubmit = () => {
        editUser(selectedUser)
        history.push('/')
    }

    const onNameChange = (e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value })
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup className='my-3'>
                <Label className='my-2'>Name</Label>
                <Input name='name' value={selectedUser.name} onChange={onNameChange} type='text' placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit'>Edit Name</Button>
            <Link to='/' className='btn btn-danger mx-2'>Cancel</Link>
        </Form>
    )
}

export default EditUser
