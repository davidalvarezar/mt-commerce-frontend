import { NavLink } from "react-router-dom";

import "./Sidebar.css";

import menuItems from "../../config/menu";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">MT Commerce</h2>

      <hr className="sidebar-divider" />

      <nav>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={{
              display: "block",
              color: "white",
              padding: "10px 0",
            }}
          >
            {item.icon} {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;