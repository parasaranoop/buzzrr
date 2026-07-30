import { FaSearch } from "react-icons/fa";

function SearchBar() {
       return (
              <div className="mx-auto mt-10 max-w-xl">

                     <div className="flex items-center rounded-full border bg-white px-5 py-4 shadow-sm">

                            <FaSearch className="text-gray-400" />

                            <input
                                   type="text"
                                   placeholder="Search your area..."
                                   className="ml-4 w-full outline-none"
                            />

                     </div>

              </div>
       );
}

export default SearchBar;