/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";

const optionalParam = [
  {
    label: "Max Active Deals",
    inputtype: "number",
    parameter_name: "max_active_deals",
  },
  {
    label: "Base Order Volume Type",
    inputtype: "enum",
    parameter_name: "base_order_volume_type",
    value: ["quote_currency", "base_currency", "percent", "xbt"],
  },
  {
    label: "Safety Order Volume Type",
    inputtype: "enum",
    parameter_name: "safety_order_volume_type",
    value: ["quote_currency", "base_currency", "percent", "xbt"],
  },
  {
    label: "Stop Loss Percentage",
    inputtype: "number",
    parameter_name: "stop_loss_percentage",
  },
  {
    label: "Cooldown",
    inputtype: "number",
    parameter_name: "cooldown",
  },
  {
    label: "Trailing Enabled",
    inputtype: "boolean",
    parameter_name: "trailing_enabled",
  },
  {
    label: "Trailing Deviation",
    inputtype: "number",
    parameter_name: "trailing_deviation",
  },
  {
    label: "BTC Price Limit",
    inputtype: "number",
    parameter_name: "btc_price_limit",
  },
  {
    label: "Strategy",
    inputtype: "enum",
    parameter_name: "strategy",
    value: ["long", "short"],
  },
  {
    label: "Leverage Type",
    inputtype: "enum",
    parameter_name: "leverage_type",
    value: ["cross", "custom", "not_specified", "isolated"],
  },

  {
    label: "Leverage Custom Type",
    inputtype: "number",
    parameter_name: "leverage_custom_type",
  },
  {
    label: "Min price",
    inputtype: "number",
    parameter_name: "min_price",
  },
  {
    label: "Max price",
    inputtype: "number",
    parameter_name: "max_price",
  },

  {
    label: "Stop Loss Timeout Enabled",
    inputtype: "boolean",
    parameter_name: "stop_loss_timeout_enabled",
  },

  {
    label: "Min Volume Btc 24h",
    inputtype: "number",
    parameter_name: "min_volume_btc_24h",
  },

  {
    label: "TSL Enabled",
    inputtype: "boolean",
    parameter_name: "tsl_enabled",
  },

  {
    label: "Deal Start Delay",
    inputtype: "number",
    parameter_name: "deal_start_delay_seconds",
    description: "in seconds",
  },

  {
    label: "Profit Currency",
    inputtype: "enum",
    parameter_name: "profit_currency",
    value: ["quote_currency", "base_currency"],
  },

  {
    label: "Start Order Type",
    inputtype: "enum",
    parameter_name: "start_order_type",
    value: ["limit", "market"],
  },
  {
    label: "Stop Loss Type",
    inputtype: "enum",
    parameter_name: "stop_loss_type",
    value: ["stop_loss", "stop_loss_and_disable_bot"],
  },
  {
    label: "Allowed Deals On Same Pair",
    inputtype: "number",
    parameter_name: "allowed_deals_on_same_pair",
  },
  {
    label: "Disable After Deals Count",
    inputtype: "number",
    parameter_name: "disable_after_deals_count",
  },

  {
    label: "Close Deals Timeout",
    inputtype: "number",
    parameter_name: "close_deals_timeout",
  },
];

export default function ParamDialog(props: {
  open: boolean;
  setOpen: any;
  selected: any[];
  setSelected: any;
}) {
  const cancelButtonRef = useRef(null);
  const [memo, setMemo] = useState({})
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto p-16"
        initialFocus={cancelButtonRef}
        onClose={props.setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:p-6">
              <div>
                {/* <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div> */}
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Select Bot Parameter
                  </Dialog.Title>
                  <div className="mt-2 grid grid-cols-4 gap-4">
                    {optionalParam.map((v, i) => (
                      <button
                        onClick={(e) => {
                          if (memo[i] !== undefined) {
                            // means to delete
                            let nArr = [...props.selected];
                            nArr.splice(memo[i], 1);
                            props.setSelected?.(nArr);
                            memo[i] = undefined;
                            setMemo({...memo})
                          } else {
                            let nxtIdx = props.selected.length;
                            let nArr = [...props.selected];
                            nArr.push(v);
                            props.setSelected?.(nArr);
                            memo[i] = nxtIdx;
                            setMemo({...memo})
                          }
                        }}
                        className="flex hover:bg-indigo-600 hover:text-white"
                      >
                        {memo[i] !== undefined ? (
                          <CheckIcon className="h-6 w-6 text-indigo-600 hover:text-white" />
                        ) : null}
                        <p>{v.label}</p>
                      </button>
                    ))}

                  
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={() => props.setOpen(false)}
                >
                  Deactivate
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={() => props.setOpen(false)}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
