import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import MovieInfo from './components/movies/movieinfo';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/films/:id" element={<MovieInfo/>} />


     </Routes>
    </div>
  );
}

export default App;
