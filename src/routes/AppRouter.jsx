import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/dashboard/DashboardPage";
import ProductsPage from "../pages/products/ProductsPage";
import ProductFormPage from "../pages/products/ProductFormPage";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="productos" element={<ProductsPage />} />
          <Route path="productos/nuevo" element={<ProductFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;