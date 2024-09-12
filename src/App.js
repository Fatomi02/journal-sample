import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homepage';
import Plagiarism from './pages/plagiarism/plagiarism';
import PublicationFee from './pages/publication_fee/publication_fee';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' index element={<HomePage/>} />
        <Route path='/plagiarism' element={<Plagiarism/>} />
        <Route path='/publicationfee' element={<PublicationFee/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
