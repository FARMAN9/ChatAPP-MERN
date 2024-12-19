import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div>
      <form action="">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow" placeholder="Search" />
        </label>
        <button>
          {" "}
          <FaSearch />
        </button>
      </form>
    </div>
  );
}

export default Search;
