const FilterSidebar = ({ filterBar, setFilterBar }) => {
  return (
    <>
      {filterBar && (
        <div
          onClick={() => setFilterBar(false)}
          className="fixed top-0 left-0 w-full h-full z-[10] cursor-pointer bg-black opacity-60"
        ></div>
      )}
      <div
        className={`w-full fixed top-0 transition-all duration-700 md2:max-w-none md2:static z-30 max-w-[300px] bg-white border-r border-solid border-[#E8ECEF] h-full ${
          filterBar ? "left-0" : "-left-[600px]"
        }`}
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

        <h2 className="text-dark leading-[1] h-[71px] border-b border-solid border-[#E8ECEF] font-medium flex justify-center items-center">
          Search for Files
        </h2>
        <div className="flex justify-between border-b border-solid border-[#E8ECEF] items-center px-3 py-5 gap-3 w-full">
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
        <div className="gap-1 text-dark border-b border-solid border-[#E8ECEF] flex justify-start items-center px-3 py-3 w-full">
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
      </div>
    </>
  );
};

export default FilterSidebar;
