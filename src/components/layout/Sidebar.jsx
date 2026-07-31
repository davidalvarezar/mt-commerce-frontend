function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#1f2937",
        color: "white",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h2>MT Commerce</h2>

      <hr />

      <p>📊 Dashboard</p>
      <p>📦 Productos</p>
      <p>👥 Clientes</p>
      <p>🛒 Ventas</p>
      <p>🚚 Compras</p>
      <p>📈 Reportes</p>
      <p>⚙ Configuración</p>
    </aside>
  );
}

export default Sidebar;