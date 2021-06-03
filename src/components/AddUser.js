import React, { useContext, useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalState'
import { v4 as uuid } from 'uuid'

const AddUser = () => {
    const [name, setName] = useState('')
    const { addUser } = useContext(GlobalContext)
    const history = useHistory()
    const onSubmit = () => {
        const newUser = {
            id: uuid(),
            name: name
        }
        addUser(newUser)
        history.push('/')
    }

    const onNameChange = (e) => {
        setName(e.target.value)
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup className='my-3'>
                <Label className='my-2'>Name</Label>
                <Input value={name} onChange={onNameChange} type='text' placeholder='Enter Name'></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/' className='btn btn-danger mx-2'>Cancel</Link>
        </Form>
    )
}

export default AddUser