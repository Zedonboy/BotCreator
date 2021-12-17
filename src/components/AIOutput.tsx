/* This example requires Tailwind CSS v2.0+ */
export default function AIOutput(props : {title: string, content : string}) {
    return (
      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:px-6">
            <h2 className="font-bold">{props.title}</h2>
          {/* Content goes here */}
          {/* We use less vertical padding on card headers on desktop than on body sections */}
        </div>
        <div className="px-4 py-5 sm:p-6 h-80">{/* Content goes here */}</div>
        <div className="px-4 py-4 sm:px-6">
            <p className="font-bold text-sm text-blue-600">Generated on 2nd December</p>
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
        </div>
      </div>
    )
  }
  