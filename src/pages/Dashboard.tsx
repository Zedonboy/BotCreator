/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Outlet, useMatch, useResolvedPath, Link } from "react-router-dom";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  MenuIcon,
  UsersIcon,
  BellIcon,
  CakeIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";

import { HashRouter, Routes, Route } from "react-router-dom";

import image from "../assets/images/contact.png";
import Stats from "../components/Stats";
import DomainPoint from "../components/DomainPoint";
import InfoDialog from "../components/InfoDialog";
const navigation = [
  { name: "Home", href: "/dashboard", icon: HomeIcon, current: true },
  {
    name: "A.I Contents",
    href: "/dashboard/history",
    icon: CakeIcon,
    current: false,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: FolderIcon,
    current: false,
  },
  {
    name: "Seolo Suggest",
    href: "kl",
    icon: CalendarIcon,
    current: false,
    label: "beta",
  },
  // { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  {
    name: "Domains",
    href: "/dashboard/domains",
    icon: ChartBarIcon,
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavLink({ name, href, icon }) {
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      key={name}
      to={href}
      className={classNames(
        match
          ? "bg-indigo-800 text-white"
          : "text-white hover:bg-indigo-600 hover:bg-opacity-75",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      {/**@ts-ignore */}
      {icon}
      {/* <icon
        className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        aria-hidden="true"
      /> */}
      {name}
    </Link>
  );
}

export default function DashboardWindow() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [infoContent, setInfoContent] = useState({title: '', content: ""})
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
        
      */}
      {/**@ts-ignore */}
      <InfoDialog open={showInfo} closeModal={setShowInfo} content={infoContent} />
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 md:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full bg-indigo-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {navigation.map((item) => <NavLink href={item.href} icon={item.icon} name={item.name}/>)}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
                  <a href="#" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-indigo-200 group-hover:text-white">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {navigation.map((item) => (
                  <NavLink icon={<item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"/>} name={item.name} href={item.href}/>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-indigo-800 p-4">
              <a href="#" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="md:pl-64 flex flex-col flex-1">
          <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1">
            <div className="py-6">
              <div className="max-w-7xl flex justify-between mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">
                  Dashboard
                </h1>
                <div className="flex flex-wrap items-center space-x-6">
                  <button onClick={e => {
                    //@ts-ignore
                    setInfoContent({content: "Your current badge is 'Young Mage', we will train you to become an SEO wizard of the First Order!"})
                    setShowInfo(true)
                  }} className="badge md:flex hidden flex-row-reverse items-center">
                  <span className="bg-indigo-700 -ml-2 text-white font-sans font-light rounded-r-full py-1 px-4 text-xs">Young Mage</span>
                    <figure className="w-10 h-10 ">
                      <img src="/src/assets/images/robot.png" className="w-full bg-white rounded-full border border-indigo-700 h-full object-cover"/>
                    </figure>
                    
                  </button>
                  <div className="hidden md:block">
                    <DomainPoint initial="S" domain="seolo.ai" title="Seolo"  />
                  </div>

                  <div className="relative">
                    <BellIcon className="h-8 w-8 text-gray-500" />
                    <span className="bg-red-500 h-2 w-2 absolute top-0 right-0 rounded-full"></span>
                  </div>
                  <div className="word">
                    <p className="text-orange font-bold items-center space-x-2 text-xl flex">
                      <p>213134</p>
                      <span>
                        <button>
                          <QuestionMarkCircleIcon className="h-4 w-4" />
                        </button>
                      </span>
                    </p>
                    <p className="text-xs font-light text-gray-500">
                      Word Count
                    </p>
                  </div>
                </div>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}

                <div className="py-4">
                  <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                    <Outlet />
                  </div>
                </div>
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
