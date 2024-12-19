import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <form action="">
        <div className="flex">
          <label className="input input-bordered flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounde-full" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
