import { createContext, useReducer } from "react"

export const ToastContext = createContext();

export const ToastContextProvider = (props) => {

    let initialState = [

    ]

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, action.payload];
            case "DELETE_NOTIFICATION":
                return state.filter(item => item.id != action.payload)
            default:
                return state;
        }
    }, initialState)

    return (
        <ToastContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ToastContext.Provider>
    )
}


