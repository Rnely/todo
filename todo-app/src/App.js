import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
