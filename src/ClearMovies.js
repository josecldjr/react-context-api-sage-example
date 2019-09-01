import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'

const ClearMovies = () => {
    const [movies, setMovies] = useContext(MovieContext)

    const crearMovies = () => {
        setMovies([])
    }
    return (
        <button onClick={crearMovies}>Clear all movies</button>
    )
}

export default ClearMovies