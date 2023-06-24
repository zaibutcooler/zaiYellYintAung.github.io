import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import EducationPage from "./EducationPage";

const IndexPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/edu" element={<EducationPage />} />
      </Routes>
    </div>
  );
};

export default IndexPage;
