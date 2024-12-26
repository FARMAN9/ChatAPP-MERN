import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className=" h-[10vh]">
      <form action="">
        <div className="flex space-x-3">
          <label className="input m-1 p-3 border-[-1px] border-gary-700 bg-slate-900 flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <FaSearch className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300 " />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
