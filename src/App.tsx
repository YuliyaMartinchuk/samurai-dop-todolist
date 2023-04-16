import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Watchlist} from "./components/Watchlist";
import {FilterMovies} from "./components/FilterMovies";

function App() {
    const title = 'Best movies'
   const [movies, setMovies] = useState([
        {id: v1(), name: 'The Shawshank Redemption', watched: false, rating: 93, genre: "Drama"},
        {id: v1(), name: 'The Godfather', watched: false, rating: 92, genre: "Crime"},
        {id: v1(), name: 'The Dark Knight', watched: false, rating: 91, genre: "Action"},
        {id: v1(), name: 'The Godfather Part II', watched: false, rating: 90, genre: "Crime"},
        {id: v1(), name: 'Schindler\'s List', watched: false, rating: 89, genre: "Military"},
        {id: v1(), name: 'The Lord of the Rings', watched: false, rating: 89, genre: "Fantasy"},
        {id: v1(), name: ' Pulp Fiction', watched: false, rating: 89, genre: "Crime"}
    ])

    const [filter, setFilter]=useState<string>("All")
    const genreFilter = (filterValue:string) => {
        setFilter(filterValue)
    }


    function removeFilms(id: string) {
        setMovies(movies.filter(el => el.id !== id))
    }

    const FilteredMovies = movies.filter(el => filter.toLowerCase() === "all"? el: el.genre.toLowerCase() === filter.toLowerCase())

    const addMovies =(nameFilm:string) => {
        let newFilm = {
            id: v1(),
            name: nameFilm,
            watched: false,
            rating: 98,
            genre: "Crime"
        }
        setMovies([newFilm,...movies])
    }


    return (
        <header className="App">
            <div className={'main'}>
                <ul>
                    <FilterMovies filter={filter}
                                  genreFilter={genreFilter}/>
                    <Watchlist
                        movies={FilteredMovies}
                        title={title}
                        removeFilms={removeFilms}
                        addMovies={addMovies}
                    />

                </ul>
            </div>
        </header>
    );
}

export default App;
