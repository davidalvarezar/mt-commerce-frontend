import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";

function ProductsToolbar({ search, onSearchChange }) {
  return (
    <div className="products-toolbar">
      <Input
        placeholder="Buscar producto..."
        value={search}
        onChange={onSearchChange}
      />

      <Button>+ Nuevo Producto</Button>
    </div>
  );
}

export default ProductsToolbar;