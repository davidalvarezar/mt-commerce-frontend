import { useState } from "react";
import { createProduct } from "../../../services/productService";
import Button from "../../../components/common/Button/Button";

function ProductForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    tipo: "",
    precioCosto: "",
    precioVenta: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const product = await createProduct(formData);

      console.log("Producto creado:", product);

      // Limpiar formulario
      setFormData({
        nombre: "",
        tipo: "",
        precioCosto: "",
        precioVenta: "",
      });

    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre *</label>

        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="tipo">Tipo *</label>

        <select
          id="tipo"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
        >
          <option value="">Seleccione...</option>
          <option value="PRODUCTO">Producto</option>
          <option value="SERVICIO">Servicio</option>
        </select>
      </div>

      <div>
        <label htmlFor="precioCosto">Precio de Costo *</label>

        <input
          id="precioCosto"
          name="precioCosto"
          type="number"
          value={formData.precioCosto}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="precioVenta">Precio de Venta *</label>

        <input
          id="precioVenta"
          name="precioVenta"
          type="number"
          value={formData.precioVenta}
          onChange={handleChange}
        />
      </div>

      <Button type="submit">
        Guardar
      </Button>
    </form>
  );
}

export default ProductForm;