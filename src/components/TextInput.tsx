import { memo } from "react"

function TextInput(props : any){
    return (
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            {props?.label}
          </label>
          <div className="mt-1">
            <input
            {...props}
              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"/>
          </div>
        </div>
    )
}

export default memo(TextInput)