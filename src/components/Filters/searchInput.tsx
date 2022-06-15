import { FaSearch } from "react-icons/fa";

const SearchInput = ({ register }: any) => {
  return (
    <div className="w-1/2 pl-4">
      <div className="overflow-hidden text-base flex items-stretch rounded-lg border w-full border-gray-300">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Enter name ex. Rick Sanchez"
            className={`w-full bg-transparent focus:outline-none p-3`}
            {...register("searchInput")}
          />
        </div>
        <button type="button" className="px-2 focus:outline-none">
          <FaSearch />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
