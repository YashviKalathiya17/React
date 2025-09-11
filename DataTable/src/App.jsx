import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [rows, setRows] = useState([]);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!newName || !newEmail) return alert('Please fill all fields');
    const newRow = { name: newName, email: newEmail };
    setRows([...rows, newRow]);
    setNewName('');
    setNewEmail('');
  };

  const handleDelete = (index) => {
    const updated = rows.filter((_, i) => i !== index);
    setRows(updated);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setNewName(rows[index].name);
    setNewEmail(rows[index].email);
  };

  const handleUpdate = () => {
    if (editIndex === null) return;
    const updatedRows = [...rows];
    updatedRows[editIndex] = { name: newName, email: newEmail };
    setRows(updatedRows);
    setEditIndex(null);
    setNewName('');
    setNewEmail('');
  };

  return (
    <div className="container">
      <h1> Data Table</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Enter name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />
        {editIndex === null ? (
          <button onClick={handleAdd}>Add</button>
        ) : (
          <button onClick={handleUpdate}>Update</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr><td colSpan="4">No data found.</td></tr>
          ) : (
            rows.map((row, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>
                  <button className="edit" onClick={() => startEdit(index)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
  