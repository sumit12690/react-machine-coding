import { BrowserRouter, Link } from 'react-router-dom';
import './App.css'
import AppRoutes from './AppRoutes';
import Header from './Header';

function App() {

  return (
    <div className="App">
      <Header />
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <AppRoutes />
    </div>
  )
}

export default App
