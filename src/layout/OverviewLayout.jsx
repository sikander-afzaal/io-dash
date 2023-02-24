import { useState } from "react";
import FilterBar from "../components/FilterBar";
import FilterSidebar from "../components/FilterSidebar";

const Overview = ({ children }) => {
  const [toggleFilterBar, setToggleFilterBar] = useState(false);
  const [activeTab, setActiveTab] = useState("All");
  return (
    <div className="main flex justify-start items-start flex-col mt-0 h-full">
      <div className="flex bg-white justify-start items-start flex-col sticky top-[0px] pt-6 left-0 z-30 w-full">
        {/* //tabs ----------------------- */}
        <div className="w-full justify-start gap-1 sm:gap-5 items-center flex border-b-2 pb-4 px-2 border-solid border-[#E8E9EB]">
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
        {/* //filter buttons ----------------------------- */}
        <div className="w-full grid grid-cols-1 md2:grid-cols-[300px__1fr]   border-b border-solid border-borderGray">
          <div className="gap-1  border-r border-solid border-borderGray px-3 py-4  text-dark  flex justify-start items-center w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="min-w-4 h-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search by keywords"
              className="bg-transparent w-full text-dark text-sm border-none outline-none placeholder:text-dark"
            />
          </div>
          <FilterBar setFilterSide={setToggleFilterBar} />
        </div>
      </div>
      {/* //bottom part ------------------------------- */}
      <div className="grid grid-cols-1 md2:grid-cols-[300px__1fr] h-full w-full ">
        <FilterSidebar
          filterBar={toggleFilterBar}
          setFilterBar={setToggleFilterBar}
        />
        {children}
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
        <div className="absolute w-full h-[2px] bg-[#304FFD] top-[calc(100%_+_16px)]"></div>
      )}
      <p
        className={`${
          active === name ? "text-[#3F434A]" : "text-regentGray"
        }  leading-[1] text-xs  sm:text-[15px] font-normal select-none`}
      >
        {name}
      </p>
      <p className="bg-[#E8E9EB] rounded-[6px] px-2 py-1 text-[8px] sm:text-[10px] font-semibold text-regentGray">
        {number}
      </p>
    </button>
  );
};
