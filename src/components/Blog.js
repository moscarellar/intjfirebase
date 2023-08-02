import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const db = getFirestore();
      const postsCollection = collection(db, 'posts'); // Replace 'posts' with your collection name
      const postsSnapshot = await getDocs(postsCollection);
      const postsList = postsSnapshot.docs.map(doc => doc.data());
      setPosts(postsList);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Author: {post.author}</p>
          <p>Date: {post.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
