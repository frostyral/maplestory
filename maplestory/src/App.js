import logo from './logo.svg';
import './App.css';
import './style.sass';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
        </head>
      <nav class="navbar fixed-top bg-dark">
  <div class="container-fluid">
                 <ul>
                    <li><a href="#">Maplestory</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">The Game</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Buy Merch</a></li>
                </ul> 
                <a href="" class="btn">PLAY FREE NOW</a>
  </div>
</nav>
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
