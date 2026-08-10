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

  const [errors, setErrors] = useState({
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

    if (name === "nombre" && value.trim() !== "") {
      setErrors((prev) => ({
        ...prev,
        nombre: "",
      }));
    }

    if (name === "tipo" && value !== "") {
      setErrors((prev) => ({
        ...prev,
        tipo: "",
      }));
    }

    if (
      name === "precioCosto" &&
      value !== "" &&
      Number(value) >= 0
    ) {
      setErrors((prev) => ({
        ...prev,
        precioCosto: "",
      }));
    }

    if (name === "precioVenta" && value !== "") {
      const precioVenta = Number(value);
      const precioCosto = Number(formData.precioCosto);

      if (
        precioVenta >= 0 &&
        !Number.isNaN(precioCosto) &&
        precioVenta >= precioCosto
      ) {
        setErrors((prev) => ({
          ...prev,
          precioVenta: "",
        }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      nombre: "",
      tipo: "",
      precioCosto: "",
      precioVenta: "",
    };

    if (formData.nombre.trim() === "") {
      newErrors.nombre = "El nombre es obligatorio.";
    }

    if (formData.tipo === "") {
      newErrors.tipo = "El tipo es obligatorio.";
    }

    if (formData.precioCosto === "") {
      newErrors.precioCosto = "El precio de costo es obligatorio.";
    } else if (Number(formData.precioCosto) < 0) {
      newErrors.precioCosto =
        "El precio de costo no puede ser negativo.";
    }

    if (formData.precioVenta === "") {
      newErrors.precioVenta = "El precio de venta es obligatorio.";
    } else if (Number(formData.precioVenta) < 0) {
      newErrors.precioVenta =
        "El precio de venta no puede ser negativo.";
    } else if (
      Number(formData.precioVenta) < Number(formData.precioCosto)
    ) {
      newErrors.precioVenta =
        "El precio de venta no puede ser menor al precio de costo.";
    }

    if (
      newErrors.nombre ||
      newErrors.tipo ||
      newErrors.precioCosto ||
      newErrors.precioVenta
    ) {
      setErrors(newErrors);
      return;
    }

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
          error={errors.nombre}
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
          error={errors.tipo}
        />

        <Input
          label="Precio Costo"
          name="precioCosto"
          type="number"
          value={formData.precioCosto}
          onChange={handleChange}
          required
          error={errors.precioCosto}
        />

        <Input
          label="Precio Venta"
          name="precioVenta"
          type="number"
          value={formData.precioVenta}
          onChange={handleChange}
          required
          error={errors.precioVenta}
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