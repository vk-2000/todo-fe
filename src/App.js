import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';
import './App.css';
import List from './components/List';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list/:id" element={<List />} />
        <Route path="*" element={<h1>404: Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
