import React, {useContext, createContext, useState} from 'react'

export const MovieContext =  createContext()


export const MovieProvider = (props) => {

    const [movies, setMovies] = useState([
        {name: 'Alberto the bard', price: 123.3, id: 1},
        {name: 'JAJAJAJ', price: 12.3, id: 1},
        {name: 'YEAYUSHDUD', price: 15.3, id: 1},
        {name: 'IHOHOH', price: 23.3, id: 1},
    ])

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}
 