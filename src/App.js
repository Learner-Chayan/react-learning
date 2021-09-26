import logo from './logo.svg';
import './App.css';
import MainComponent from './components/MainComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          Learn React -
          <MainComponent />
      </header>
    </div>
  );
}

export default App;
