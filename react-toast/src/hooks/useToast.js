import React, { useContext, useRef } from 'react'
import { ToastContext } from '../context/ToastContext'

function useToast() {
    const { state, dispatch } = useContext(ToastContext)

    const addToast = ({ type, message, description }) => {
        dispatch({
            type: "ADD_NOTIFICATION", payload: {
                id: Math.random().toString(36).substring(2, 9),
                type, message, description
            }
        })
    }

    const deleteToast = (id) => {
        dispatch({
            type: "DELETE_NOTIFICATION", payload: id
        })
    }
    return [state, { addToast, deleteToast }];
}

export default useToast
