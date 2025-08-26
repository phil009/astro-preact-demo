import { useEffect, useState } from "preact/hooks";

// Simulate IndexedDB
let db: string[] = [];

function middleware(msg: string) {
  return { text: msg, ts: new Date().toLocaleTimeString() };
}

export default function LiveMessages() {
  const [messages, setMessages] = useState<{ text: string; ts: string }[]>([]);

  // Listen for new message event
  useEffect(() => {
    const handler = (e: any) => {
      // 1. Middleware processes it
      const processed = middleware(e.detail);

      // 2. Store in "db"
      db.push(JSON.stringify(processed));

      // 3. FEC pulls from db
      const parsed = db.map(x => JSON.parse(x));

      // 4. Update UI state
      setMessages(parsed);
    };

    window.addEventListener("newMessage", handler);
    return () => window.removeEventListener("newMessage", handler);
  }, []);

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Live Messages (with middleware + db)</h3>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <p key={i}>💬 {m.text} <small style={{ color: "#666" }}>({m.ts})</small></p>
        ))}
      </div>
    </div>
  );
}
