import React from "react";

function App() {
  const isEmbedded = window.self !== window.top;

  if (!isEmbedded) {
    return (
      <div style={{ padding: "2rem" }}>
        <h2>Access restricted</h2>
        <p>This application must be launched from SafetyCulture.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h1>External App for SafetyCulture</h1>
      <p>Loaded securely inside iframe ✅</p>
    </div>
  );
}

export default App;
