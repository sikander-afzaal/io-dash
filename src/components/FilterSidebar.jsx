import FilterTab from "./FilterTab";

const FilterSidebar = ({ filterBar, setFilterBar }) => {
  return (
    <>
      {filterBar && (
        <div onClick={() => setFilterBar(false)} className="overlay"></div>
      )}
      <div
        className={`w-full fixed md2:pt-0 pt-7 md2:max-h-none max-h-screen overflow-y-auto top-0 transition-all duration-700 md2:max-w-none md2:static md2:z-0 z-50 max-w-[300px] bg-white border-r border-solid border-[#E8ECEF] h-full ${
          filterBar ? "left-0" : "-left-[600px]"
        } flex justify-start items-center  flex-col pb-4`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          onClick={() => setFilterBar(false)}
          className="w-6 h-6 absolute md2:hidden block top-3 right-3 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>

        <div className="flex min-h-[72px] justify-between border-b border-solid border-[#E8ECEF] items-center px-3 py-5 gap-3 w-full">
          <div className="flex justify-center items-center  gap-2">
            <h4 className="text-dark leading-[1] font-medium text-base">
              Filters
            </h4>
            <p className="flex justify-center items-center gap-1 px-2 py-[2px] border border-[#E8ECEF] border-solid bg-white rounded-full leading-[1] text-dark">
              <span className="text-[#47A8F7] text-sm">2</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </p>
          </div>
          <div className="flex justify-center items-center gap-2">
            <button className="bg-white border border-solid border-[#e8ecef] rounded-full text-dark text-sm font-medium px-3 leading-[1] h-[26px]">
              Load
            </button>
            <button className="bg-[#47A8F7] border text-white border-solid border-[#e8ecef] rounded-full text-dark text-sm font-medium px-3 leading-[1] h-[26px]">
              Save
            </button>
          </div>
        </div>

        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Lists"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Department"
        />
        <FilterTab
          tags={[
            "Hardware",
            "Software",
            "Web",
            "Design",
            "Hardware",
            "Software",
            "Web",
            "Design",
          ]}
          name="Safeguards"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Name"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Title"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Seniority"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Company"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Industry"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Number of Employees"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Location"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Stage"
        />
        <FilterTab
          tags={["Hardware", "Software", "Web", "Design"]}
          name="Owner"
        />
        <button className="bg-black w-full max-w-[250px] mt-5  min-h-[40px] text-white text-lg border-none rounded-full">
          More Filters
        </button>
      </div>
    </>
  );
};

export default FilterSidebar;
