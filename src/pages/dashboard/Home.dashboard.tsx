import { Dialog, Transition } from "@headlessui/react";
import {
  QuestionMarkCircleIcon
} from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import image from "../../assets/images/contact.png"
import Stats from "../../components/Stats";

export default function HomeDashboard() {
    return (
        <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
                <div>
                  <div>
                    <p className="text-orange font-bold items-center space-x-2 text-xl flex">
                      <p>213134</p>
                      <span>
                        <button>
                          <QuestionMarkCircleIcon className="h-4 w-4" />
                        </button>
                      </span>
                    </p>
                    <p className="text-xs font-light text-gray-500">
                      Character Count
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}

                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                    <section className="rounded-2xl flex items-center shadow shapebg w-full h-32 md:h-64 bg-[#4834c4]">
                      <section className="w-full md:w-7/12 h-full flex text-white items-center justify-center">
                        <Transition
                          as={Fragment}
                          show={true}
                          enter="delay-500 duration-1000"
                          enterFrom="opacity-0 -translate-x-24"
                          enterTo="opacity-100 translate-x-0"
                        >
                          <div>
                            <p className="font-bold text-2xl md:text-4xl">
                              Welcome, Joe
                            </p>
                            <p className="text-white mt-2 text-base md:text-xl">
                              Good day, trust you’re fine.
                            </p>
                          </div>
                        </Transition>
                      </section>
                      <section className="w-0 md:w-5/12 p-4">

                        <img src={image} className=""/>
                      </section>
                    </section>
                    <Stats/>
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
    )
}