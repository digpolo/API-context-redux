import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../reducers/reducer";


const CharStates = createContext()

const initialState = {
    list: [],
    favs: [],
    // theme
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const url = 'https://rickandmortyapi.com/api/character/'

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data.results}))
    }, [])

    return (
        <CharStates.Provider value={{state, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)