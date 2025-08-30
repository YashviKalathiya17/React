import React, { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function StorageDemo() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const uploadFile = async () => {
    if (!file) return alert("Please choose a file first!");
    
    const fileRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(fileRef, file);

    const downloadURL = await getDownloadURL(fileRef);
    setUrl(downloadURL);
    alert("File uploaded successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Firebase Storage</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile}>Upload File</button>

      {url && (
        <div>
          <h3>Uploaded File:</h3>
          <a href={url} target="_blank" rel="noopener noreferrer">View File</a>
        </div>
      )}
    </div>
  );
}
