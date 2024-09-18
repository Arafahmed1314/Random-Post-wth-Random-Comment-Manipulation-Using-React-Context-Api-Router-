import { useEffect, useState } from 'react';
import PostCard from './PostCard';
import { useCustomContext } from './ContextApi';

function Home() {
  const [posts, setPosts] = useState([]);
  const { value, setValue, searchResult } = useCustomContext(); // Access `value` from Context

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setValue(data);
        setPosts(data); // Set posts initially
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, [setValue]);

  // Filter posts based on the search result if it's provided
  const filteredPosts = searchResult
    ? posts.filter((post) =>
        post.title.toLowerCase().includes(searchResult.toLowerCase())
      )
    : posts;

  return (
    <>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>No posts found</p>
      )}
    </>
  );
}

export default Home;
