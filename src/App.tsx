import { Outlet, Link, useLocation } from "react-router-dom";
import "./App.css";

export default function App() {
  const location = useLocation();

  // Compare two sources of truth for the current URL
  const reactRouterPath = location.pathname;
  const browserPath = window.location.pathname;
  const isInSync = reactRouterPath === browserPath;

  console.log("App render:", {
    reactRouterPath,
    browserPath,
    isInSync: isInSync ? "✅ YES" : "❌ NO - BUG!",
  });

  return (
    <div className="app">
      <header>
        <h2>✨ Test browser/nuqs behaviour ✨</h2>
        <table style={{ margin: "10px auto", borderCollapse: "collapse" }}>
          <tbody>
            <tr>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>React Router says:</td>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc", fontFamily: "monospace" }}>{reactRouterPath}</td>
            </tr>
            <tr>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>Browser says:</td>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc", fontFamily: "monospace" }}>{browserPath}</td>
            </tr>
            <tr>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc" }}>In sync?</td>
              <td style={{ padding: "5px 10px", border: "1px solid #ccc", background: isInSync ? "#c8e6c9" : "#ffcdd2" }}>
                {isInSync ? "✅ YES" : "❌ NO - BUG!"}
              </td>
            </tr>
          </tbody>
        </table>
        <nav className="main-nav">
          <Link to="/A?count=1">Page A (count=1)</Link>
          <Link to="/B?count=2">Page B (count=2)</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
