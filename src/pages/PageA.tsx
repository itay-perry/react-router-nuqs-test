import { useQueryState, parseAsInteger } from "nuqs";
import { Link } from "react-router-dom";

export function PageA() {
  const [count] = useQueryState("count", parseAsInteger.withDefault(0));

  // THE BUG: PageA can render with PageB's count value during navigation!
  console.log("PageA render:", { count, "window.location.pathname": window.location.pathname });

  return (
    <div style={{ padding: 20, background: "#e8f5e9" }}>
      <h1>Page A</h1>
      <p>Count from URL: <strong>{count}</strong></p>
      <Link to="/B?count=2">Go to Page B (count=2)</Link>
    </div>
  );
}
