import { useState } from "react";
import OverviewBox from "../../components/OverviewBox";

const Overview = () => {
  const DUMMY__DATA = [
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="main flex justify-start items-start flex-col mt-5 h-full">
      <div className="w-full justify-start gap-5 items-center flex border-b-2 pb-2 px-2 border-solid border-[#E8E9EB]">
        <Tabs
          active={activeTab}
          setActive={setActiveTab}
          name="All"
          number={151}
        />
        <Tabs
          active={activeTab}
          setActive={setActiveTab}
          name="Started"
          number={128}
        />
        <Tabs
          active={activeTab}
          setActive={setActiveTab}
          name="On Hold"
          number={15}
        />
        <Tabs
          active={activeTab}
          setActive={setActiveTab}
          name="Completed"
          number={8}
        />
      </div>
      <div className="grid grid-cols-[210px__1fr] h-full w-full ">
        <div className="w-full bg-red-50 h-full"></div>
        <div className="flex justify-start items-start w-full flex-col gap-4">
          <div className="flex justify-end w-full items-center border-b gap-3 px-2 py-4 border-solid border-[#E8ECEF]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3F434A"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
              />
            </svg>
            <button className="text-white rounded-full px-3 py-1 cursor-pointer bg-[#304FFD] text-[15px] border-none">
              + Add Project
            </button>
            <div className="flex justify-center items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#8A9099"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <div className="h-[18px] w-[1px] bg-[#E8E9EB]"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#304FFD"
                className="w-6 h-6 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                />
              </svg>
            </div>
            <div className="bg-white text-[#B8B9BE] border border-[#E2E2EA] border-solid rounded-[8px] w-[38px] aspect-square cursor-pointer hover:bg-[#E2E2EA] transition-all grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </div>
            <div className="bg-white text-[#B8B9BE] border border-[#E2E2EA] border-solid rounded-[8px] w-[38px] aspect-square cursor-pointer hover:bg-[#E2E2EA] transition-all grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
            <div className="bg-white text-[#B8B9BE] border border-[#E2E2EA] border-solid rounded-[8px] w-[38px] aspect-square cursor-pointer hover:bg-[#E2E2EA] transition-all grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                />
              </svg>
            </div>
            <div className="bg-white text-[#B8B9BE] border border-[#E2E2EA] border-solid rounded-[8px] w-[38px] aspect-square cursor-pointer hover:bg-[#E2E2EA] transition-all grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </div>
          </div>
          <div className="grid grid-cols-fluid auto-rows-max h-auto gap-10 px-5 w-full">
            {DUMMY__DATA.map((elem, idx) => {
              return <OverviewBox key={idx + "box"} {...elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

const Tabs = ({ name, number, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(name)}
      className="flex justify-center bg-transparent border-none px-1 items-center cursor-pointer  gap-2 relative "
    >
      {active === name && (
        <div className="absolute w-full h-[2px] bg-[#304FFD] top-[calc(100%_+_8px)]"></div>
      )}
      <p
        className={`${
          active === name ? "text-[#3F434A]" : "text-[#8A9099]"
        }  leading-[1]   text-[15px] font-normal select-none`}
      >
        {name}
      </p>
      <p className="bg-[#E8E9EB] rounded-[6px] px-2 py-1 text-[10px] font-semibold text-[#8A9099]">
        {number}
      </p>
    </button>
  );
};
