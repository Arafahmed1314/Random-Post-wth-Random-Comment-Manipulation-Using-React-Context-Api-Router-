import { useState } from "react";
import { Link } from "react-router-dom";
import { useCustomContext } from "./ContextApi";

function Header() {
  const [searchValue, setSearchValue] = useState();
  const {setSearchResults} =useCustomContext()
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchResults(searchValue);
    setSearchValue('');
  };
  return (
    <div className="bg-gray-800 py-4 flex justify-around text-white">
      <div className="search flex items-center justify-center">
        <form onSubmit={handleSubmit}
          action=""
          className="w-full bg-white rounded-lg border border-white"
        >
          <input
            type="text"
            className="flex-grow text-gray-800 p-2 outline-none text-xl rounded-l-lg"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <input
            type="submit"
            value={"Submit"}
            className="bg-gray-800 text-xl p-2 cursor-pointer"
          />
        </form>
      </div>
      <div className="menu flex items-center justify-center">
        <ul className="flex gap-8">
          <li className="text-white">
            <Link to="/" className="text-white cursor-pointer text-xl">
              Home
            </Link>
          </li>
          <li className="text-white">
            <Link to="/about" className="text-white cursor-pointer text-xl">
              About
            </Link>
          </li>
          <li className="text-white">
            <Link to="/contact" className="text-white cursor-pointer text-xl">
             Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
