import { FaSearch } from "react-icons/fa";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative mx-auto mt-10 max-w-md">
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Search by area..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-full border border-gray-200 py-4 pl-12 pr-5 outline-none focus:border-blue-500"
      />

    </div>
  )
}
export default SearchBar;