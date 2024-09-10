import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homepage';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' index element={<HomePage/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
