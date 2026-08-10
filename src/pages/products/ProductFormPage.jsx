import ProductForm from "./components/ProductForm";
import "./ProductFormPage.css";

function ProductFormPage() {
  return (
    <div className="product-form-page">
      <div className="product-form-page-header">
        <h1>Nuevo Producto</h1>
        <p>Complete los datos del producto.</p>
      </div>

      <div className="product-form-container">
        <ProductForm />
      </div>
    </div>
  );
}

export default ProductFormPage;