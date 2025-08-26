import { useState } from "preact/hooks";

export default function Messages() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const addMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Messages</h3>
      <div style={{ maxHeight: "150px", overflowY: "auto", marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
        {messages.length === 0 && <p style={{ color: "#666" }}>No messages yet</p>}
        {messages.map((msg, i) => <p key={i}>💬 {msg}</p>)}
      </div>
      <input
        value={input}
        onInput={(e: any) => setInput(e.target.value)}
        placeholder="Type a message..."
        style={{ padding: "0.5rem", width: "70%" }}
      />
      <button onClick={addMessage} style={{ padding: "0.5rem 1rem", marginLeft: "0.5rem" }}>Send</button>
    </div>
  );
}
