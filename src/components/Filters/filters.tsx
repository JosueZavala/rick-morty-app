import { FiltersProps } from "../../typings/application";
import DropdownFilter from "./dropdownFilter";
import SearchInput from "./searchInput";
import { RiFilterOffLine } from "react-icons/ri";

const Filters: React.FC<FiltersProps> = ({
  register,
  control,
  onClearFilter,
}) => {
  return (
    <div className="flex bg-stone-100 rounded-xl h-20 w-full pt-4 mt-8 mx-auto md:w-2/3 lg:w-1/2">
      <SearchInput register={register} />
      <DropdownFilter control={control} />

      <div className="pr-4 pt-4">
        <RiFilterOffLine
          onClick={onClearFilter}
          className="w-4 h-4 cursor-pointer stroke-current text-primary"
        />
      </div>
    </div>
  );
};

export default Filters;
