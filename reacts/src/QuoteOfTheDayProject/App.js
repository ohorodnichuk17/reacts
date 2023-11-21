import logo from './logo.svg';
import './App.css';
import QuoteOfTheDay from './QuoteOfTheDay';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <QuoteOfTheDay />
        </header>
      </div>
  );
}

export default App;
