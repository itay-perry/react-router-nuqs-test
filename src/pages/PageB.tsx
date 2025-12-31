import { useQueryState, parseAsInteger } from "nuqs";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export function PageB() {
  // nuqs reads 'count' from the browser URL
  const [count] = useQueryState("count", parseAsInteger.withDefault(0));

  // Expected: count should ALWAYS be 2 on Page B
  // Bug: During browser back, count briefly becomes 1 (Page A's value)!
  const isCorrect = count === 2;
  
  console.log("PageB render:", { 
    count, 
    expected: 2, 
    isCorrect: isCorrect ? "✅" : "❌ BUG - seeing Page A's value!" 
  });

  useEffect(() => {
    return () => console.log(">>> PageB UNMOUNTING <<<");
  }, []);

  return (
    <div style={{ padding: 20, background: isCorrect ? "#e3f2fd" : "#ffcdd2" }}>
      <h1>Page B</h1>
      <p>Count from URL (via nuqs): <strong style={{ fontSize: 24 }}>{count}</strong></p>
      <p>Expected: <strong>2</strong></p>
      <p style={{ color: isCorrect ? "green" : "red" }}>
        {isCorrect ? "✅ Correct!" : "❌ BUG: Showing Page A's count!"}
      </p>
      <br />
      <Link to="/A?count=1">Go to Page A (count=1)</Link>
    </div>
  );
}
