interface Row {
  id: number;
  name: string;
}

export default function LargeTable() {
  const rows: Row[] = Array.from({ length: 200 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`
  }));

  return (
    <div style={{ padding: "1rem", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h3>Large Data Table (200 rows)</h3>
      <table cellPadding={"5"} style={{ width: "100%", marginTop: "1rem" }}>
        <thead>
          <tr><th>ID</th><th>Name</th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id}><td>{r.id}</td><td>{r.name}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
