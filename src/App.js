import {useEffect, useState} from 'react'
import './App.css';
import Moviescard from './Moviescard';
import SearchIcon from './search.svg'

const API_URL ='http://www.omdbapi.com?apikey=e2e9eadb'
const App = () => {
  const [searchTerm,setSearchTerm]=useState('')
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Gone Girl");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if(data.Search === undefined)
    {
      setMovies([]) 
    }
    else{
      setMovies(data.Search)
    }
    
    
  };
  const handleSearch = (e) =>{
   setSearchTerm(e.target.value)
   searchMovies(searchTerm)
  }

  const handleEnter = ({key}) =>{
   if (key !== "Enter" || searchTerm.length===0){   
   }
   else{
    searchMovies(searchTerm)
   }
  }


  const handleClick = () =>{
   searchMovies(searchTerm)
  }


  return (
    <div className="app">
      <div className='menubar'>
      <h1>Moiveland</h1>
      <div className='search'>
      <input type="text"
      placeholder='Search for Movies'
      value={searchTerm}
      onChange={(e)=>{ handleSearch(e) }}
      onKeyUp={handleEnter}
     />
     <img src={SearchIcon} alt="Search" 
     onClick={handleClick}
     />
    </div>
      </div>
    
     
     

    {movies.length === 0 ?
   (
    <div className="empty">
      <h2>No Movies Found</h2>
    </div>
   )
   : 

   ( <div className='container'>  
      {movies.map((movie)=>(

<Moviescard movie={movie}  ></Moviescard>

      ))}
    </div> )} 
    </div>
  
  );
}

export default App;
