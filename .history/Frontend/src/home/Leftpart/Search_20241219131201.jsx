import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="">
      <form action="">
        <div className="flex py-4">
          <label className="input input-bordered flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full " />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
