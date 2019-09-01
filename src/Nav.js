import React, {useContext} from 'react'
import {MovieContext} from './MovieContext'
const Nav = () => {
    const [movies, setContext] = useContext(MovieContext)
    
    return(
        <div>
            <h3>
                Movies list (n: {movies.length})
            </h3>
            
        </div>
    )
}

export default Nav