import logo from './logo.svg';
import './css/App.css';
import {Outlet,Link} from 'react-router-dom'
import "./css/navStyles.scss"

function App() {
  return (
    <div className="App">
      <nav className="nav-list">
        <ul>
          <li>
            <Link to="/help">关于我们</Link>
          </li>
          <li>
            <Link to="/contact">联系我们</Link>
          </li>
        </ul> 
      </nav>
      <Outlet />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
