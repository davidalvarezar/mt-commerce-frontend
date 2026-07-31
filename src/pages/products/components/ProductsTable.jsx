import Card from "../../../components/common/Card/Card";
import DataTable from "../../../components/common/DataTable/DataTable";

function ProductsTable({ products }) {
  const columns = [
    {
      key: "nombre",
      header: "Nombre",
    },
    {
      key: "sku",
      header: "SKU",
    },
    {
      key: "precioVenta",
      header: "Precio",
    },
    {
      key: "stock",
      header: "Stock",
    },
  ];

  return (
    <Card>
      <DataTable
        columns={columns}
        data={products}
      />
    </Card>
  );
}

export default ProductsTable;