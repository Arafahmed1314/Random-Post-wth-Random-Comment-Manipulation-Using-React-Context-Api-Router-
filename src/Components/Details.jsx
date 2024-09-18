import { useParams } from "react-router-dom";
import { useCustomContext } from "./ContextApi";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const { value } = useCustomContext();

  const findData = value.find((data) => data.id === Number(id));

  useEffect(() => {
    if (findData) {
      // Fetch comments
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((res) => res.json())
        .then((data) => setComments(data));

      // Fetch random images
      fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res) => res.json())
        .then((data) => setPhotos(data.slice(0, comments.length))); // Limit to comment length
    }
  }, [id, findData, comments.length]);

  if (!findData) {
    return <p className="text-center text-gray-600 mt-10">Loading...</p>;
  }

  const { id: postId, userId, title, body } = findData;

  return (
    <div className="container mx-auto max-w-4xl p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div className="mb-6">
        <p className="text-lg font-semibold">Id: <span className="text-gray-700">{postId}</span></p>
        <p className="text-lg font-semibold">UserId: <span className="text-gray-700">{userId}</span></p>
        <p className="text-lg font-semibold">Title: <span className="text-gray-700">{title}</span></p>
        <p className="text-lg font-semibold">Body: <span className="text-gray-700">{body}</span></p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {comments.length > 0 ? (
        <ul className="space-y-4">
          {comments.map((comment, index) => (
            <li key={comment.id} className="p-4 bg-gray-100 rounded-md shadow flex items-start space-x-4">
              {photos[index] && (
                <img
                  src={photos[index].thumbnailUrl}
                  alt="Random"
                  className="w-12 h-12 rounded-full object-cover"
                />
              )}
              <div>
                <p className="font-semibold text-blue-600">{comment.name}</p>
                <p className="text-gray-800">{comment.body}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No comments found.</p>
      )}
    </div>
  );
}

export default Details;
