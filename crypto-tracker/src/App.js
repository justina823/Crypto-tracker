
import './App.css';
import Index from './pages/Index.js';
import{ BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'

import ErrorPage from './pages/ErrorPage';
import Coin from './components/Coin';



function App() {
  return (
 
    <Router>
      <nav>
        <Link to='/'>Home</Link>
        
      </nav>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route path='/coin' element={<Coin/>}>
            <Route path=':coinId' element={<Coin/>} />
            </Route>
          <Route path='/404' element={<ErrorPage/>}/> 
        </Routes>
    </Router>

  )
}

export default App