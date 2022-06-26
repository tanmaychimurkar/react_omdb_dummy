import './App.css';
import {useState, useEffect} from "react";
import searchicon from './search.svg'
import MovieCard from "./MovieCard";

// const Person = (props) => {
//   return (
//       <div>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>City: Zurich</h3>
//       </div>
//   )
// }

const movie1 = {
    "Title": "The Amazing Spiderman T4 Premiere Special",
    "Year": "2012",
    "imdbID": "tt2233044",
    "Type": "movie",
    "Poster": "https://upload.wikimedia.org/wikipedia/commons/6/69/Sunset-Time_15035-480x360_%284810484993%29.jpg"
}


let API_URL = 'http://www.omdbapi.com/?apikey=f48ab937'

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json()
        setMovies(data.Search)
        }

    useEffect(() => {
        searchMovies('Spiderman')
    }, []);


    return (
        <div className={'app'}>
            <h1>MovieLand</h1>
            <div className={'search'}>
                <input
                placeholder = "Search for Movies"
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src={searchicon} alt={'https://'} onClick={() => searchMovies(searchTerm)}/>
            </div>

            {movies.length > 0 ? (
                <div className={'container'}>
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
                <div className={'empty'}>
                    <h2>No movie found</h2>
                </div>
            )}
        </div>
    )
}











// function App() {
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//         {/* Never do what is done below, never modify state manually in react!!!!! */}
//         // counter = 100;
//         setCounter(100);
//     }, [])
//   return (
//     <div className="App">
//
//         {/* (components with props passed) */}
//       {/*<Person name = {'Tanmay'} age={4}></Person>*/}
//       {/*<Person name = {'Chimurkar'} age={6}></Person>*/}
//       {/*<Person name = {'John'}></Person>*/}
//
//         {/* (state and hooks in react) */}
//         <button onClick={() => setCounter((prevCount)=> prevCount-1)}>-</button>
//         <h1>{counter}</h1>
//         <button onClick={() => setCounter((prevCount)=> prevCount+1)}>-</button>
//     </div>
//   );
// }

export default App;
