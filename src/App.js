import logo from './logo.svg';
import './css/App.css';
import React ,{useState,useEffect} from'react';
import {Outlet,Link} from 'react-router-dom'
import Skeleton from './components/Skeleton'; 
import "./css/navStyles.scss"


function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求
    setTimeout(() => {
      setData({ title: '骨架屏后标题', content: '骨架屏后内容...' });
      setLoading(false);
    }, 2000);
  }, []);


  return (loading?<Skeleton discription="骨架屏父层传递props"/>:
    <div className="App">
      <div>{data.title}</div>
      <div>{data.content}</div>
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
