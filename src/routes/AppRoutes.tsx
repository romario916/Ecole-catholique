import { BrowserRouter, Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import Home from "../pages/public/Home";
import School from "../pages/public/School";
import Programs from "../pages/public/Programs";
import Levels from "../pages/public/Levels";
import News from "../pages/public/News";
import NewsDetail from "../pages/public/NewsDetail";
import Events from "../pages/public/Events";
import Gallery from "../pages/public/Gallery";
import Registration from "../pages/public/Registration";
import Contact from "../pages/public/Contact";
import SchoolFees from "../pages/public/SchoolFees";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ecole" element={<School />} />
          <Route path="/programmes" element={<Programs />} />
          <Route path="/niveaux" element={<Levels />} />
          <Route path="/actualites" element={<News />} />
          <Route path="/actualites/:id" element={<NewsDetail />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/frais-scolarite" element={<SchoolFees />} />
          <Route path="/inscription" element={<Registration />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;