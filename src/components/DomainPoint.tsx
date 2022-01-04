import { memo } from "react";
function DomainPoint(props : {initial : string, title : string, domain: string}) {
  return (
    <div className="col-span-1 flex shadow-sm rounded-md">
      <div className="flex-shrink-0 bg-green-500 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md">
        {props.initial}
      </div>
      <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
        <div className="flex-1 px-4 py-2 text-sm truncate">
          <a href="" className="text-gray-900 font-medium hover:text-gray-600">
            {props.title}
          </a>
          <p className="text-gray-500">{props.domain}</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Open options</span>
            {/* <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(DomainPoint)
