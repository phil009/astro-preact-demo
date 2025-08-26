import { useState } from "preact/hooks";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <p><strong>Counter:</strong> {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ padding: "0.5rem 1rem" }}>
        Increment
      </button>
    </div>
  );
}
