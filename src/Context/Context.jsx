import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { reducer } from "../reducers/reducer";

const CharStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    // theme
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const {list, favs} = state
    console.log(state)
    const url = 'https://rickandmortyapi.com/api/character/'
    // const url = ''
    useEffect(() => {
        axios(url)
        .then(res => {
            toast('Se obtuvieron los personajes',  {
                position: "bottom-right",
                theme: "dark",
            })
            dispatch({type: 'GET_CHARACTERS', payload: res.data.results})
        })
        .catch(err => {
            Swal.fire({
                title: 'Oops...',
                text: 'Error al obtener los personajes',
                icon: 'error',
                footer: err
            })
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return (
        <CharStates.Provider value={{list, favs, dispatch}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)