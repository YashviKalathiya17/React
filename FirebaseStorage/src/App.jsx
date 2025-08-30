import React from "react";
import FirestoreDemo from "./components/FirestoreDemo";
import StorageDemo from "./components/StorageDemo";

function App() {
  return (
    <div>
      <h1>Firebase + Vite React Project</h1>
      <FirestoreDemo />
      <StorageDemo />
    </div>
  );
}

export default App;
