import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./components/homepage/homepage";
import Plagiarism from "./pages/plagiarism/plagiarism";
import ContactPage from "./pages/contact/contact";
import PublicationFee from "./pages/publication_fee/publication_fee";
import SubmissionGuide from "./pages/submission_guide/submission_guide";
import DigitalArchive from "./pages/digital_archive/digital_archive";
import PublicationEthics from "./pages/publication_ethics/publication_ethics";
import EditorialPolicy from "./pages/editorial_policy/editorial_policy";
import SubmitPage from "./pages/submit_page/submitPage";
import EditorialInBoard from "./pages/editorial_in_board/editorial-in-boardf";
import PeerReview from "./pages/peer-review/peer-review";
import OpenAccessPolicy from "./pages/open-access-policy/open-access-policy";
import Archive from "./pages/archive/archive";
import Indexing from "./pages/indexing/indexing";
import IssueDetails from "./pages/issue-details/issue-details";
import JournalPage from "./pages/journal-page/journal-page";
import { ToastContainer } from "react-toastify";
import CurrentPage from "./pages/current-page/current";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/plagiarism" element={<Plagiarism />} />
        <Route path="/publicationfee" element={<PublicationFee />} />
        <Route path="/submissionguide" element={<SubmissionGuide />} />
        <Route path="/digitalarchive" element={<DigitalArchive />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/publicationethics" element={<PublicationEthics />} />
        <Route path="/editorialpolicy" element={<EditorialPolicy />} />
        <Route path="/submitpage" element={<SubmitPage />} />
        <Route path="/indexing" element={<Indexing />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/editorial-in-board" element={<EditorialInBoard />} />
        <Route path="/peer-review" element={<PeerReview />} />
        <Route path="/open-access-policy" element={<OpenAccessPolicy />} />
        <Route path="/current" element={<CurrentPage />} />
        <Route path="/journal/:volume/:issue" element={<IssueDetails />} />
        <Route path="/journal/:volume/:issue/:page" element={<JournalPage />} />
        <Route path="*" element={<div>404: Page Not Found</div>} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </BrowserRouter>
  );
}

export default App;
