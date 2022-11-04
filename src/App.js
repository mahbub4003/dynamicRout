// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';
import BlogData from './components/BlogData';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/blog' element={ <Blog /> } />
          <Route path='/blog/:title' element={ <BlogData /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
