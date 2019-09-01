import React, {useState, useContext} from 'react'
import {MovieContext} from './MovieContext'

const AddMovieForm = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const updateName = e => {
        setName(e.target.value)
        console.log(e.target.value);
        
    }

    const updatePrice = e => {
        setPrice(e.target.value)
        console.log(e.target.value);
        
    }

    const addMovie = e => {
        e.preventDefault()
        console.log(name, price);
        setMovies(sMovies => [{id: null, name, price},...movies ])
    }

    return (
        <form>
            <div>
                <label for="movieName">Name:</label>
                <input id="movieName" onChange={updateName} name="movieName"/>
            </div>
            <div>
                <label for="moviePrice">Price:</label>
                <input id="moviePrice" onChange={updatePrice} name="moviePrice"/>
            </div>
            <button onClick={addMovie}>Add</button>
        </form>
    )
}

export default AddMovieForm