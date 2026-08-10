import { useNavigate } from "react-router-dom";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";

function ProductsToolbar({ search, onSearchChange }) {
  const navigate = useNavigate();

  const handleNewProduct = () => {
    navigate("/productos/nuevo");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        marginBottom: "20px",
      }}
    >
      <Input
        placeholder="Buscar producto..."
        value={search}
        onChange={onSearchChange}
      />

      <Button type="button" onClick={handleNewProduct}>
        + Nuevo Producto
      </Button>
    </div>
  );
}

export default ProductsToolbar;