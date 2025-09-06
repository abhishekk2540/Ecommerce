'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Page() {

  
  const [posts, setPosts] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState('');

  const fetchPosts = async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=4');
      setPosts(res.data);
    } catch (error) {
      console.error('GET error:', error);
    }
  };

  const addPost = async () => {
    try {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: newPostTitle,
        body: 'This is the body content',
        userId: 1,
      });
      setPosts([res.data, ...posts]); 
      setNewPostTitle('');
    } catch (error) {
      console.error('POST error:', error);
    }
  };

  const updatePost = async (id) => {
    try {
      const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: 'Updated Title',
        body: 'Updated Body',
        userId: 1,
      });
      setPosts(posts.map(post => (post.id === id ? res.data : post)));
    } catch (error) {
      console.error('PUT error:', error);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setPosts(posts.filter(post => post.id !== id));
    } catch (error) {
      console.error('DELETE error:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  },[]);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Posts</h1>

      <div className="mb-4">
        <input
          className="border px-3 py-2 mr-2"
          placeholder="Enter title"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <button
          onClick={addPost}
          className="bg-amber-300 text-black px-4 py-2 rounded"
        >
          Add Post
        </button>
      </div>

      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-3 border p-4 rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => updatePost(post.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Update
              </button>
              <button
                onClick={() => deletePost(post.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

