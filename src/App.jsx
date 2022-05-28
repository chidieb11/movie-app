import React, {useState, useEffect} from "react";

import MovieCard from "./components/MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchItem, setSearchItem] = useState("");

    useEffect(() => {
        searchMovies("spiderman");
    }, []);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    };

    return (
        <div className="App">
            <h1>ChocolateFilms</h1>
            <div className="search">
                <input type="text" value={searchItem} onChange={(e) => setSearchItem(e.target.value)}
                       placeholder="Search for films"/>
                <img src={SearchIcon} onClick={() => searchMovies(searchItem)} alt="search"/>
            </div>

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No movies found!</h2>
                </div>
            )}
        </div>
    );
};

export default App;
