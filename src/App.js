import React, { useState } from "react";
import { callApi } from "./api";

function App() {
  const [id, setId] = useState("");
  const [data, setData] = useState(null);

  const handleGet = async () => {
    const result = await callApi("GET", `/`, { id });
    setData(result);
  };

  const handleCreate = async () => {
    const result = await callApi("POST", `/`, { id, name: "Example" });
    setData(result);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Amplify + API Gateway + Lambda + DynamoDB</h1>
      <input
        placeholder="Enter ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={handleCreate}>Create</button>
      <button onClick={handleGet}>Get</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;