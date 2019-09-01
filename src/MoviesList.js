import React, {useState, useContext} from 'react'
import { list } from 'postcss';
import Movie from './Movie';
import {MovieContext} from './MovieContext'
const MoviesList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (<div> 
       { movies.map((movie) => <Movie movie={movie}></Movie>)}
    </div>)
}



export default MoviesList