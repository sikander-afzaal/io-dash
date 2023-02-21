import { useState } from "react";
import OverviewBox from "../../components/OverviewBox";
import FilterBar from "../../components/FilterBar";
import FilterSidebar from "../../components/FilterSidebar";

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
  const [toggleFilterBar, setToggleFilterBar] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="main flex justify-start items-start flex-col mt-5 h-full">
      <div className="w-full  justify-start gap-1 sm:gap-5 items-center flex border-b-2 pb-2 px-2 border-solid border-[#E8E9EB]">
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
      <div className="grid grid-cols-1 md2:grid-cols-[300px__1fr] h-full w-full ">
        <FilterSidebar
          filterBar={toggleFilterBar}
          setFilterBar={setToggleFilterBar}
        />
        <div className="flex justify-start items-start w-full flex-col gap-4">
          <FilterBar setFilterSide={setToggleFilterBar} />
          <div className="grid grid-cols-1 sm:grid-cols-fluid auto-rows-max h-auto gap-y-16 gap-x-10 px-2 sm:px-5 w-full">
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
        }  leading-[1] text-xs  sm:text-[15px] font-normal select-none`}
      >
        {name}
      </p>
      <p className="bg-[#E8E9EB] rounded-[6px] px-2 py-1 text-[8px] sm:text-[10px] font-semibold text-[#8A9099]">
        {number}
      </p>
    </button>
  );
};
