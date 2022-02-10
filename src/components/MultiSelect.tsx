/* This example requires Tailwind CSS v2.0+ */
import { Fragment, memo, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon, XIcon } from "@heroicons/react/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MultSelect(props: { data: string[], label : string, buttonName: string, property?: string, domChanged:(selected : any[]) => void, value ?: any[] }) {
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    if(props.value){
      //@ts-ignore
      setSelected([...props.value])
    }
  })
  return (
    <div>
      <Listbox
        value={null}
        onChange={(v) => {
          let arr = [...selected];
          arr.push(v);
          setSelected(arr);
          props.domChanged(arr)
        }}
      >
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">
              {props.label}
            </Listbox.Label>
            <div className="mt-1 relative">
              <span className="flex flex-wrap space-x-2 truncate">
                {selected.map((v, i) => (
                  <span className="px-2 rounded-full py-1 bg-teal-700 text-white flex items-center text-xs">
                    {props?.property ? v[props.property] : v}
                    <button
                      onClick={(e) => {
                        let newArr = [...selected];
                        newArr.splice(i, 1);
                        setSelected(newArr);
                        props?.domChanged(newArr)
                      }}
                    >
                      <XIcon className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </span>
              <Listbox.Button className="inline-flex mt-2 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {props.buttonName}
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                  {props?.data?.map((v, i) => (
                    <Listbox.Option
                      key={i}
                      onClick={(e) => {
                        let arr = [...selected];
                        arr.push(v);
                        setSelected(arr);
                      }}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "cursor-default select-none relative py-2 pl-8 pr-4"
                        )
                      }
                      value={v}
                    >
                      {({ active }) => (
                        <>
                          <span
                            className={classNames(
                              selected.includes(props.data[i])
                                ? "font-semibold"
                                : "font-normal",
                              "block truncate"
                            )}
                          >
                            {props?.property ? v[props.property] : v}
                          </span>

                          {selected.includes(props.data[i]) ? (
                            <span
                              className={classNames(
                                active ? "text-white" : "text-indigo-600",
                                "absolute inset-y-0 left-0 flex items-center pl-1.5"
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default memo(MultSelect);
