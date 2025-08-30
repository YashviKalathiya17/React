import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Public API

const ApiHunter = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [editingPost, setEditingPost] = useState(null);

  // READ (Fetch API Data)
  const fetchPosts = async () => {
    try {
      const response = await axios.get(API_URL);
      setPosts(response.data.slice(0, 5)); // only show first 5 for demo
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  // CREATE (Add new post)
  const createPost = async () => {
    try {
      const response = await axios.post(API_URL, newPost);
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "" });
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  // UPDATE (Edit post)
  const updatePost = async (id) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, editingPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      setEditingPost(null);
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  // DELETE (Remove post)
  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2><center>API HUNTER</center></h2>

      {/* Create New Post */}
      <div>
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
        <button onClick={createPost}>Create Post</button>
      </div>

      <hr />

      {/* Posts List */}
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          {editingPost && editingPost.id === post.id ? (
            <>
              <input
                type="text"
                value={editingPost.title}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, title: e.target.value })
                }
              />
              <input
                type="text"
                value={editingPost.body}
                onChange={(e) =>
                  setEditingPost({ ...editingPost, body: e.target.value })
                }
              />
              <button onClick={() => updatePost(post.id)}>Save</button>
              <button onClick={() => setEditingPost(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <button onClick={() => setEditingPost(post)}>Edit</button>
              <button onClick={() => deletePost(post.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default ApiHunter;
