import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homepage';
import Plagiarism from './pages/plagiarism/plagiarism';
import ContactPage from './pages/contact/contact';
import PublicationFee from './pages/publication_fee/publication_fee';
import AuthorGuide from './pages/anuthors_guide/authors_guide';
import SubmissionGuide from './pages/submission_guide/submission_guide';
import Copyright from './pages/copyright/copyright';
import DigitalArchive from './pages/digital_archive/digital_archive';
import PublicationEthics from './pages/publication_ethics/publication_ethics';
import EditorialPolicy from './pages/editorial_policy/editorial_policy';
import SubmitPage from './pages/submit_page/submitPage';



function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' index element={<HomePage/>} />
        <Route path='/plagiarism' element={<Plagiarism/>} />
        <Route path='/publicationfee' element={<PublicationFee/>} />
        <Route path='/authorsguide' element={<AuthorGuide />} />
        <Route path='/submissionguide' element={<SubmissionGuide />} />
        <Route path='/copyright' element={<Copyright />} />
        <Route path='/digitalarchive' element={<DigitalArchive />} />
        <Route path='/publicationethics' element={<PublicationEthics />} />
        <Route path='/editorialpolicy' element={<EditorialPolicy />} />
        <Route path='/submitpage' element={<SubmitPage />} />
        <Route path='/contactus' element={<ContactPage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
