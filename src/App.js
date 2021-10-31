import './App.css';
import './components/Header.css';
import Header from './components/Header.js';
import './components/Main.css';
import Main from './components/Main.js';
import './components/Box.css';
import Box from './components/Box.js';
import './components/Footer.css';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className="Main">
        <div className="Box-2">
        <Box />
        <Box />
        </div>
        <div className="Box-2">
        <Box />
        <Box />
        </div>
        <div className="Box-2">
        <Box />
        <Box />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
