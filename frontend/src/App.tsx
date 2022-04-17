import './App.css';
import ProductListView from './features/product-list';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router >
          <Routes>
            <Route  path="/" element={<ProductListView/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
