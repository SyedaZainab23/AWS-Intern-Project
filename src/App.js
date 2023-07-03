import logo from './logo.svg';
import './App.css';
import Name from './components/team_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Name />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ****Choose your favourite team****

        </a>
          <div>

<select>

  <option value="1">1</option>

  <option value="2">2</option>

  <option value="3">3</option>

</select>

</div>
      </header>
    </div>
  );
}

export default App;
