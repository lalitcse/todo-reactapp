import React, { createContext, useReducer } from 'react'

import AppReducer from './AppReducer'

// Initail state
const initialState = {
    users: []
}

// Create Context
export const GlobalContext = createContext(initialState)



// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    const removeUser = (user) => {
        dispatch({
            type: 'REMOVE_USER',
            payload: user
        })
    }

    const addUser = (id) => {
        dispatch({
            type: 'ADD_USER',
            payload: id
        })
    }

    const editUser = (user) => {
        dispatch({
            type: 'EDIT_USER',
            payload: user
        })
    }

    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser: removeUser,
            addUser: addUser,
            editUser: editUser
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
 