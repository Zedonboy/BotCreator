import { ClipboardListIcon } from "@heroicons/react/outline";
export default function MilestoneAction() {
  return (
    <div className="flex flex-wrap w-full border border-green-500 rounded-lg px-8 py-4 items-center space-x-4 bg-green-50">
      <div className="flex items-center space-x-4 py-2">
      <ClipboardListIcon className="text-green-600 h-8 w-8" />
      <p>Write Acticle on fish Farming</p>
      </div>
      
      <button
        type="button"
        className="w-full md:w-auto items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        Get Started
      </button>
    </div>
  );
}
