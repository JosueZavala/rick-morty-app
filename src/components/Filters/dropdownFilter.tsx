import { Controller } from "react-hook-form";
import Select from "react-select";
import { options } from "../../typings/application";

const DropdownFilter = ({ control }: any) => {
  return (
    <div className="w-1/2 p-2">
      <Controller
        name="statusFilter"
        control={control}
        render={({ field }) => {
          return (
            <Select
              id="statusFilter"
              className="h-full"
              placeholder="Status Character"
              options={options}
              {...field}
            />
          );
        }}
      />
    </div>
  );
};

export default DropdownFilter;
