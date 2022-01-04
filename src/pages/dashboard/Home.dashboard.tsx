import { Dialog, Transition } from "@headlessui/react";
import { QuestionMarkCircleIcon, BellIcon } from "@heroicons/react/outline";
import { Fragment, useState } from "react";
import image from "../../assets/images/contact.png";
import DomainPoint from "../../components/DomainPoint";
import MilestoneAction from "../../components/MilestoneAction";
import MilestoneSet from "../../components/MilestoneSet";
import Stats from "../../components/Stats";
import TemplateCards from "../../components/TemplateCards";
import BlogPost from "../../components/BlogPost";
import Joyride from "react-joyride";

export default function HomeDashboard() {
  return (
    <>
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
              <p className="font-bold text-2xl md:text-4xl">Welcome, Joe</p>
              <p className="text-white mt-2 text-base md:text-xl">
                Good day, trust you’re fine.
              </p>
            </div>
          </Transition>
        </section>
        <section className="w-0 md:w-5/12 p-4">
          <img src={image} className="" />
        </section>
      </section>
      <section>
        <div className="mt-4">
          <MilestoneAction />
        </div>
      </section>
      <Stats />
      <section className="flex flex-wrap">
        <section className="w-full mt-8 md:w-2/3 px-8">
          <TemplateCards />
        </section>
        <section className="w-full mt-8 md:w-1/3">
          <MilestoneSet />
        </section>
        <section className="w-full">
          <BlogPost />
        </section>
      </section>
    </>
  );
}
