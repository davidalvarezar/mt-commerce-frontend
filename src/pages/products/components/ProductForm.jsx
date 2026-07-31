import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productService";
import Button from "../../../components/common/Button/Button";

function ProductForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    precioCosto: "",
    precioVenta: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProduct(formData);

      setSuccessMessage("✅ Producto creado correctamente.");

      setTimeout(() => {
        navigate("/productos");
      }, 1000);
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <div>
      <h2>Nuevo Producto</h2>

      {successMessage && (
        <p
          style={{
            color: "green",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          {successMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Tipo</label>
          <input
            type="text"
            name="tipo"
            value={formData.tipo}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Precio Costo</label>
          <input
            type="number"
            name="precioCosto"
            value={formData.precioCosto}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>Precio Venta</label>
          <input
            type="number"
            name="precioVenta"
            value={formData.precioVenta}
            onChange={handleChange}
          />
        </div>

        <Button type="submit">Guardar</Button>
      </form>
    </div>
  );
}

export default ProductForm;