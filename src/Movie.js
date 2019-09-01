import React from 'react' 

const Movie = (props) => { 
    
    return (
        <div>
            <label>Name: {props.movie.name}</label> <br></br>
            <label>Price: {props.movie.price}</label> <br></br>
            <hr></hr>
        </div>
    )
}



export default Movie