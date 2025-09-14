import './App.css';
import MovieCard from './components/MovieCard';
const App = () => {
  return (
    <>
      <MovieCard movie={{title:"tims film", release_date:"2024"}} />
    </>
  )
}

export default App
