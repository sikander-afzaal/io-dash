import { useEffect, useRef, useState } from "react";

const FilterTab = ({ name, tags }) => {
  const [includedTags, setIncludedTags] = useState([]);
  const [excludedTags, setExcludedTags] = useState([...tags]);
  const [activeTab, setActiveTab] = useState(false);
  const tabRef = useRef(null);
  const mainRef = useRef(null);
  const refBtn = useRef(null);

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
    const heightBottom = tabRef.current.clientHeight;
    const heightButton = refBtn.current.clientHeight;
    if (activeTab) {
      const minH = heightBottom + heightButton;
      mainRef.current.style.height = minH + "px";
      mainRef.current.style.minHeight = minH + "px";
    } else {
      mainRef.current.style.height = heightButton + "px";
      mainRef.current.style.minHeight = heightButton + "px";
    }
  }, [activeTab, includedTags.length]);

  return (
    <div
      ref={mainRef}
      className={`w-full border-b border-solid border-borderGray overflow-hidden px-3 flex justify-start items-start flex-col transition-all duration-300`}
    >
      <button
        ref={refBtn}
        onClick={() => setActiveTab((prev) => !prev)}
        className={`w-full flex h-max justify-between py-4 items-center gap-2`}
      >
        <div className="text-lg text-dark flex justify-start items-start flex-col gap-1">
          {name}
          <div className="flex justify-start items-center gap-2 max-w-[200px] flex-wrap hide-scrollbar">
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
        ref={tabRef}
        className={` w-full pb-3 flex justify-start min-h-max  transition-all duration-500 items-start flex-col gap-5`}
      >
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <p className="text-dark font-medium text-sm">Include:</p>
          <div className="bg-[#EFF3F6] min-h-[25px] w-full flex-wrap hide-scrollbar py-[6px] rounded-sm px-2 flex justify-start items-center gap-2">
            {includedTags.map((elem, idx) => {
              return <Tag handler={excludeATag} name={elem} key={idx + elem} />;
            })}
          </div>
        </div>
        <div className="flex justify-start items-start w-full flex-col gap-1">
          <p className="text-dark font-medium text-sm">Exclude:</p>
          <div className="bg-[#EFF3F6] min-h-[25px] flex-wrap hide-scrollbar w-full py-[6px] rounded-sm px-2 flex justify-start items-center gap-2">
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
