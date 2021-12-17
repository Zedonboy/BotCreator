import React from "react"

function PrimaryBtn(props : any) {
    return (
        <button {...props} className={`bg-purple-700 active:bg-purple-800 text-white px-6 py-3 ${props?.rounded ? "rounded" : ""} ${props?.fullWidth ? "w-full" : ""}`}>
        </button>
    )
}

export default React.memo(PrimaryBtn)