import { memo } from "react";

function SingleSelect(props: { options: string[], label : string }) {
  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <select
        id={props.label.toLowerCase()}
       
        {...props}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={props.options[0]}
      >
        {props.options.map((v) => (
          <option>{v}</option>
        ))}
      </select>
    </div>
  );
}

export default memo(SingleSelect)
