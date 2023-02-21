import { useEffect, useState } from "react";

const FilterTab = ({ name, tags }) => {
  const [includedTags, setIncludedTags] = useState([]);
  const [excludedTags, setExcludedTags] = useState([...tags]);
  const [activeTab, setActiveTab] = useState(false);
  const [heightTab, setHeightTab] = useState("84px");

  const excludeATag = (name) => {
    setIncludedTags((prev) => {
      return prev.filter((elem) => elem != name);
    });
    setExcludedTags((prev) => {
      return [...prev, name];
    });
  };
  const includeATag = (name) => {
    setExcludedTags((prev) => {
      return prev.filter((elem) => elem != name);
    });
    setIncludedTags((prev) => [...prev, name]);
  };
  useEffect(() => {
    if (activeTab && includedTags.length > 0) {
      setHeightTab("min-h-[230px]");
    } else if (activeTab && includedTags.length === 0) {
      setHeightTab("min-h-[200px]");
    } else if (!activeTab && includedTags.length > 0) {
      setHeightTab("min-h-[84px]");
    } else if (!activeTab && includedTags.length === 0) {
      setHeightTab("min-h-[60px]");
    }
  }, [activeTab, includedTags.length]);

  return (
    <div
      className={`w-full  border-b border-solid border-[#E8ECEF] overflow-hidden px-3 flex justify-start items-start flex-col transition-all duration-300 ${heightTab}`}
    >
      <button
        onClick={() => setActiveTab((prev) => !prev)}
        className={`w-full flex ${
          includedTags.length > 0 ? "min-h-[84px]" : "min-h-[60px]"
        }  justify-between py-4 items-center gap-2`}
      >
        <div className="text-lg text-dark flex justify-start items-start flex-col gap-1">
          {name}
          <div className="flex justify-start items-center gap-2 max-w-[200px] overflow-x-auto hide-scrollbar">
            {includedTags.map((elem) => {
              return (
                <p
                  key={elem}
                  className="leading-[1]  text-white gap-1 p-1 rounded bg-[#9FA9BF] text-xs font-medium"
                >
                  {elem}
                </p>
              );
            })}
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className={`w-5 h-5 transition-all duration-500 ${
            activeTab ? "rotate-0" : "rotate-45"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        className={`${
          activeTab ? "max-h-[1000px] pb-3 " : "max-h-0"
        } w-full flex justify-start h-full transition-all duration-500 items-start flex-col gap-5`}
      >
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <p className="text-dark font-medium text-sm">Include:</p>
          <div className="bg-[#EFF3F6] min-h-[25px] w-full overflow-x-auto hide-scrollbar py-[6px] rounded-sm px-2 flex justify-start items-center gap-2">
            {includedTags.map((elem, idx) => {
              return <Tag handler={excludeATag} name={elem} key={idx + elem} />;
            })}
          </div>
        </div>
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <p className="text-dark font-medium text-sm">Exclude:</p>
          <div className="bg-[#EFF3F6] min-h-[25px] overflow-x-auto hide-scrollbar w-full py-[6px] rounded-sm px-2 flex justify-start items-center gap-2">
            {excludedTags.map((elem, idx) => {
              return <Tag handler={includeATag} name={elem} key={idx + elem} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTab;

const Tag = ({ name, handler }) => {
  return (
    <div
      onClick={() => handler(name)}
      className="flex justify-center leading-[1] items-center text-white gap-1 p-1 rounded cursor-pointer bg-[#9FA9BF] text-xs font-medium"
    >
      {name}{" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-3 h-3 cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  );
};
