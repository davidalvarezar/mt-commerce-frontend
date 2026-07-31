import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function MainLayout({ children }) {
  return (
    <>
      <Header />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}

export default MainLayout;