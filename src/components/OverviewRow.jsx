const OverviewRow = ({
  invoice,
  img,
  compId,
  company,
  about,
  aboutDesc,
  deadline,
  status,
  progress,
}) => {
  return (
    <div className="grid  border-b border-solid border-[#EAECF0] grid-cols-[100px__1fr__1fr__114px__152px__0.7fr__70px] gap-x-8 w-full py-6 px-2 sm:px-5 ">
      <div className="flex justify-start items-center gap-2">
        <input type="checkbox" id={invoice} className="w-5 aspect-square " />
        <label htmlFor={invoice} className="text-[#101828] text-sm font-medium">
          {invoice}
        </label>
      </div>
      <div className="flex justify-start items-center gap-3">
        <img src={img} className="rounded-full w-[40px] aspect-square" alt="" />
        <div className="flex justify-start items-start flex-col gap-1">
          <h4 className="text-[#101828] text-sm font-medium leading-[1]">
            {company}
          </h4>
          <p className="text-[#667085] text-sm leading-[1]">{compId}</p>
        </div>
      </div>
      <div className="flex justify-start items-start flex-col gap-1">
        <h4 className="text-[#101828] text-sm font-normal leading-[1]">
          {about}
        </h4>
        <p className="text-[#667085] text-sm leading-[1]">{aboutDesc}</p>
      </div>
      <h4 className="text-[#101828] text-sm font-medium leading-[1]">
        {deadline}
      </h4>
      {status === "customer" ? (
        <p className="text-[#027A48] rounded-full w-max h-max self-center justify-center bg-[#ECFDF3] px-2 py-1 text-xs font-medium">
          Customer
        </p>
      ) : (
        <p className="text-[#344054] rounded-full w-max h-max self-center justify-center bg-[#F2F4F7] px-2 py-1 text-xs font-medium">
          Churned
        </p>
      )}
      <div className="flex justify-start w-full items-center gap-2">
        <div className="relative w-full rounded-full overflow-hidden h-[8px] bg-[#F9F5FF]">
          <div
            style={{ width: `${progress}%` }}
            className="absolute z-0 left-0 top-0 h-full bg-[#7F56D9] rounded-full"
          ></div>
        </div>
        <p className="text-[#344054] text-sm font-medium">{progress}%</p>
      </div>
      <div className="w-full h-full  flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#98A2B3"
          className="w-7 h-7 cursor-pointer self-center items-center "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </div>
    </div>
  );
};

export default OverviewRow;
