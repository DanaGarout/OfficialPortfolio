import { TopNav } from './components/TopNav';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default App;
