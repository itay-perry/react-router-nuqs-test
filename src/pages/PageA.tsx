import { useQueryState, parseAsInteger } from "nuqs";
import { useEffect, useMemo } from "react";

export function PageA() {
  const [count] = useQueryState("count", parseAsInteger.withDefault(0));

  const isCorrect = useMemo(() => {
    const correct = count === 1;
    console.log("PageA render:", { 
      count, 
      expected: 1, 
      isCorrect: correct ? "✅" : "❌ BUG - seeing Page B's value!" 
    });
    return correct;
  }, [count]);

  useEffect(() => {
    return () => console.log(">>> PageA UNMOUNTING <<<");
  }, []);

  return (
    <div style={{ padding: 20, background: isCorrect ? "#e8f5e9" : "#ffcdd2" }}>
      <h1>Page A {isCorrect ? "✅" : "❌"}</h1>
      <p>Count from URL (via nuqs): <strong style={{ fontSize: 24 }}>{count}</strong></p>
      <p>Expected: <strong>1</strong></p>
    </div>
  );
}
