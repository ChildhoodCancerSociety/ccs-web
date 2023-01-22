import { Component, FC, useState } from "react";
import { Tab } from "@headlessui/react";

const ENV = process.env.NODE_ENV;

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface TabbedPageProps {
  components: {
    Component: typeof Component | FC;
    name: string;
  }[];
}

const TabbedPage: React.FC<TabbedPageProps> = function TabbedPage({ components }: TabbedPageProps) {
  return (
    <div className="w-full h-full">
      <Tab.Group>
        <Tab.List className="absolute flex space-x-1 rounded-xl bg-blue-900/20 p-1 right-2 top-2">
          {components.map((category) => (
            <Tab
              key={category.name}
              className={({ selected }) => classNames(
                "w-full rounded-lg py-2.5 min-w-[50px] px-3.5 text-sm font-medium leading-5 text-blue-700",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                selected
                  ? "bg-white shadow"
                  : "text-blue-400 hover:bg-white/[0.12] hover:text-white",
              )}
            >
              { category.name }
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="w-full h-full">
          {components.map((posts, idx) => (
            <Tab.Panel
              key={posts.name}
              className={classNames(
                "rounded-xl bg-white p-3",
                "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
              )}
            >
              <posts.Component />
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default TabbedPage;
