import logo from './logo.svg';
import './App.css';

function App() {
  const spotify_key = process.env.REACT_APP_SPOTIFY_KEY;
  return (
    <div className="App">
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
          {spotify_key}
        </a>
      </header>
    </div>
  );
}

export default App;
