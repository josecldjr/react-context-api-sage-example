import React, {useEffect,useState} from 'react';
import Text from './Text'
import './App.css';
import MoviesList from './MoviesList';
import Nav from './Nav'
import {MovieProvider} from './MovieContext'
import AddMovieForm from './AddMovieForm'
import ClearMovies from './ClearMovies'
function App() {

   

  return (
    <MovieProvider> 
      <div>
        <Nav/>
        <AddMovieForm/>
        <ClearMovies></ClearMovies>
        <hr></hr>
        <MoviesList></MoviesList>
      </div>
    </MovieProvider>
  );
}

export default App;
