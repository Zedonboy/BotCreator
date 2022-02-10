import { memo } from "react"

function CheckBox(props:{label : string}) {
    return (
        <div className="relative flex items-start">
        <div className="flex items-center h-5">
          <input
          {...props}
            id="comments"
            aria-describedby="comments-description"
            name="comments"
            type="checkbox"
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="comments" className="font-medium text-gray-700">
            {props.label}
          </label>
          {/* <span id="comments-description" className="text-gray-500">
            <span className="sr-only">New comments </span>so you always know what's happening.
          </span> */}
        </div>
      </div>
    )
}

export default memo(CheckBox)