import React from "react";
import shape from "../assets/images/shapes.png";
import ReactTooltip from "react-tooltip"
function InfoCards(props: { value?: string; desc?: string; info?: string, loading ?: boolean }) {
  return (
    <div
      style={{
        backgroundImage: `url(${shape})`,
      }}
      className="w-full relative shadow p-4 border-purple-800 rounded-lg border-[1px] hover:shadow-2xl"
    >
      {props.info ? (
          <>
        <div data-tip data-for={props.info.toLowerCase()} className="absolute top-0 right-0 mt-2 mr-4 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <ReactTooltip
         id={props.info.toLowerCase()} place="top" type="dark" effect="solid">
            {props?.info}
        </ReactTooltip>
        </>
      ) : null}
      {props.loading ? (
        <div className="py-4">
         <svg className="animate-spin h-5 w-5 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
       </svg>
       </div>
      ) : (<h1 className="font-bold text-2xl text-orange">{props.value}</h1>)}
     
      
      <h6 className="font-bold text-xs text-purple-800">{props.desc}</h6>
    </div>
  );
}

export default React.memo(InfoCards);
