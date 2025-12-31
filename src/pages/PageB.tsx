import { useQueryState, parseAsInteger } from "nuqs";
import { useEffect, useMemo } from "react";

export function PageB() {
  const [count] = useQueryState("count", parseAsInteger.withDefault(0));

  const isCorrect = useMemo(() => {
    const correct = count === 2;
    console.log("PageB render:", { 
      count, 
      expected: 2, 
      isCorrect: correct ? "✅" : "❌ BUG - seeing Page A's value!" 
    });
    return correct;
  }, [count]);

  useEffect(() => {
    return () => console.log(">>> PageB UNMOUNTING <<<");
  }, []);

  return (
    <div style={{ padding: 20, background: isCorrect ? "#e3f2fd" : "#ffcdd2" }}>
      <h1>Page B {isCorrect ? "✅" : "❌"}</h1>
      <p>Count from URL (via nuqs): <strong style={{ fontSize: 24 }}>{count}</strong></p>
      <p>Expected: <strong>2</strong></p>
    </div>
  );
}
