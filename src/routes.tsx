import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import ProductListing from "./components/ProductListing";

const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile/:id" element={<ProductListing />} />
    </Routes>
  );
};

export default ApplicationRoutes;
