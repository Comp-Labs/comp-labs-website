import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RSSFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Ftechfiddle.io%2Fblog%2Frss.xml');
        const { items } = response.data;
        setPosts(items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.guid}>
          <h2>{post.title}</h2>
          <p>{post.pubDate}</p>
          <p>{post.description}</p>
          <button onClick={() => window.open(post.link, '_blank')}>
            Read More
          </button>
        </div>
      ))}
    </div>
  );
};

export default RSSFeed;
