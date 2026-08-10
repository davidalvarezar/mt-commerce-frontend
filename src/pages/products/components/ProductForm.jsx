import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../services/productService";
import Button from "../../../components/common/Button/Button";
import Input from "../../../components/common/Input/Input";
import Select from "../../../components/common/Select/Select";

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

  const handleCancel = () => {
    navigate("/productos");
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
        <Input
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />

        <Select
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          options={[
            {
              value: "PRODUCTO",
              label: "Producto",
            },
            {
              value: "SERVICIO",
              label: "Servicio",
            },
          ]}
          required
        />

        <Input
          label="Precio Costo"
          name="precioCosto"
          type="number"
          value={formData.precioCosto}
          onChange={handleChange}
          required
        />

        <Input
          label="Precio Venta"
          name="precioVenta"
          type="number"
          value={formData.precioVenta}
          onChange={handleChange}
          required
        />

        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <Button type="submit">
            Guardar
          </Button>

          <Button type="button" onClick={handleCancel}>
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;