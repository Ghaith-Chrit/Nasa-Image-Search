import { createContext, useReducer } from 'react';
import DataReducer from './DataReducer';

const initialState = {
    data: null,
    fetching: false
}

export const DataContext = createContext(initialState);

export const DataContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(DataReducer, initialState);
    
    return (
        <DataContext.Provider
            value = {{
                data: state.data,
                fetching: state.fetching,
                dispatch
            }}
        >
            {children}
        </DataContext.Provider>
    )
}