import { useNavigate } from "react-router-dom";

function PostCard({ post }) {
    const { id, title } = post;
    const navigate = useNavigate();
    const handleBtn = (id) => {
        navigate(`/id/${id}`);
    };

    return (
        <div className="min-w-md bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 mb-6 pl-12">
            <div className="p-4">
                <p className="text-sm text-gray-500">ID: {id}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{title}</h2>

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    onClick={() => handleBtn(id)}
                >
                    See More
                </button>
            </div>
        </div>
    );
}

export default PostCard;
