import { useState, useEffect } from "preact/hooks";

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener("openModal", handler);
    return () => window.removeEventListener("openModal", handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", inset: "0", background: "rgba(0,0,0,0.6)",
      display: "flex", alignItems: "center", justifyContent: "center"
    }}>
      <div style={{ background: "white", padding: "2rem", borderRadius: "10px", width: "300px", textAlign: "center" }}>
        <h2>Modal Window</h2>
        <p>This modal was triggered externally.</p>
        <button onClick={() => setIsOpen(false)} style={{ marginTop: "1rem", padding: "0.5rem 1rem" }}>
          Close
        </button>
      </div>
    </div>
  );
}
