import { useEffect, useState } from "react";

import { getProducts } from "../../services/productService";

import ProductsToolbar from "./components/ProductsToolbar";
import ProductsTable from "./components/ProductsTable";

import "./ProductsPage.css";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) => {
  const searchTerm = search.toLowerCase();

  return (
    product.nombre.toLowerCase().includes(searchTerm) ||
    product.sku.toLowerCase().includes(searchTerm)
  );
});
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    };

    loadProducts();
  }, []);

 return (
  <div className="products-page">
    <div className="products-page-header">
      <div className="products-page-title">
        <h1>Productos</h1>
        <p>Administración de productos del sistema.</p>
      </div>
    </div>

    <ProductsToolbar
  search={search}
  onSearchChange={(event) => setSearch(event.target.value)}
/>

<ProductsTable products={filteredProducts} />
  </div>
);
}

export default ProductsPage;