import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from '@docusaurus/Link';
import Tooltip from '@mui/joy/Tooltip'

const RSSFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://techfiddle.io/blog/feed.json');
        const { items } = response.data;
        setPosts(items);
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'UTC',
    };

    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid gap-4 lg:grid-cols-3">
        {posts.map((post) => (
          // <div key={post.guid}>
          //   <h2>{post.title}</h2>
          //   <p>{post.pubDate}</p>
          //   <p>{post.description}</p>
          //   <button onClick={() => window.open(post.link, '_blank')}>
          //     Read More
          //   </button>
          // </div>
          <article key={post.id} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link href={post.url}>
              <img className="w-full rounded-lg shadow-xl shadow-blue-gray-900/50" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="Blog Post Image" />
            </Link>
            <br /><br />
            <div className="flex flex-row justify-between items-center mb-5 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-solid fa-newspaper"></i> Article</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-calendar" /> {formatDate(post.date_modified)}</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"><i className="fa-regular fa-clock" /> 14 min read</span>
            </div>
            <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href="#">{post.title}</Link></h2>
            <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{post.summary}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex items-center space-x-4">
                  <div className="flex mb-5 -space-x-4">
                    <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Tech Fiddle">
                      <img data-tooltip-target="tooltip-complabs" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/comp-labs.png" alt="" />
                    </Tooltip>
                    <Tooltip arrow placement="top" variant="solid" color="neutral" size="md" title="Rudra Sen">
                      <img data-tooltip-target="tooltip-rudrasen2" className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://github.com/rudrasen2.png" alt="" />
                    </Tooltip>
                  </div>
                </div>
              </div>
              <Link href={post.url} className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Read more
                <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default RSSFeed;
