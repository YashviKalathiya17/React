 import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const FirebaseCrud = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingId, setEditingId] = useState(null);

  const postsCollection = collection(db, "posts");

  // READ
  const fetchPosts = async () => {
    const data = await getDocs(postsCollection);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  // CREATE
  const createPost = async () => {
    await addDoc(postsCollection, newPost);
    setNewPost({ title: "", body: "" });
    fetchPosts();
  };

  // UPDATE
  const updatePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await updateDoc(postDoc, newPost);
    setEditingId(null);
    fetchPosts();
  };

  // DELETE
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
    fetchPosts();
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔥 Firebase CRUD</h1>

      <input
        type="text"
        placeholder="Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Body"
        value={newPost.body}
        onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
      />
      <button onClick={createPost}>Add</button>

      <hr />

      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          {editingId === post.id ? (
            <>
              <input
                type="text"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
              />
              <input
                type="text"
                value={newPost.body}
                onChange={(e) => setNewPost({ ...newPost, body: e.target.value })}
              />
              <button onClick={() => updatePost(post.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => { setEditingId(post.id); setNewPost(post); }}>
                Edit
              </button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FirebaseCrud;
