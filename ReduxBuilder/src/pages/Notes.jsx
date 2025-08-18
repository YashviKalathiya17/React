import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NotesApp() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // Add Note
  const handleAddNote = () => {
    if (!title.trim() || !content.trim()) return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
    };

    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
    setCategory("General");
  };

  // Filter + Search
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || note.category === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container my-5">
      {/* Header */}
      <h1 className="text-center text-primary fw-bold mb-4">
        Notes Application
      </h1>

      {/* Search + Filter */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="col-md-3 mb-2">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="form-select"
          >
            <option value="All">All</option>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>

      {/* Add Note Form */}
      <div className="card border-primary shadow-sm mb-5">
        <div className="card-header bg-primary text-white text-center fw-semibold">
          Add a New Note
        </div>
        <div className="card-body">
          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <textarea
              placeholder="Enter content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option>General</option>
              <option>Work</option>
              <option>Personal</option>
            </select>
          </div>
          <div className="text-end">
            <button
              onClick={handleAddNote}
              className="btn btn-success px-4"
            >
              Add Note
            </button>
          </div>
        </div>
      </div>

      {/* Notes Grid */}
      <div className="row">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div key={note.id} className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{note.title}</h5>
                  <p className="card-text">{note.content}</p>
                  <span className="badge bg-info text-dark">
                    {note.category}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No notes found.</p>
        )}
      </div>
    </div>
  );
}
