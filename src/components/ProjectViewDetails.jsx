const ProjectViewDetails = ({
  name,
  company,
  img,
  budget,
  start,
  end,
  desc,
  rightPanel,
}) => {
  return (
    <div className="w-full flex justify-start items-start flex-col gap-5 p-8">
      {/* //top part----------------- */}
      <div className="w-full flex justify-between items-center gap-2">
        <div className="flex justify-start items-center gap-4">
          <div className="bg-white rounded-[14px] w-[38px] sm:w-[48px] aspect-square border border-solid border-[#E8E9EB] flex justify-center items-center">
            <img
              src={img}
              className="w-[25px] sm:w-[34px] object-contain"
              alt=""
            />
          </div>
          <div className="flex justify-start items-start flex-col gap-2">
            <h4 className="text-dark leading-[1] text-base xl:text-xl font-medium">
              {name}
            </h4>
            <p className="text-[#595F69] leading-[1] text-sm ">{company}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#8A9099"
            className="w-6 sm:w-8 h-6 sm:h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <svg
            onClick={() => rightPanel(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#8A9099"
            className="sm:w-6 w-5 sm:h-6 h-5 cursor-pointer lg:hidden block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>
      </div>
      {/* //details ---------------------------- */}
      <div className="flex justify-start items-start flex-col gap-3 mt-3 w-full">
        <h4 className="uppercase text-[#595F69] text-sm font-medium">
          Details
        </h4>
        <div className="w-full xl:flex-row flex-col flex justify-between items-start gap-5 xl:gap-0 xl:items-center max-w-[600px] ">
          <div className="flex justify-start items-center gap-3">
            <div className="bg-[rgba(73,201,109,0.1)] w-[40px] aspect-square rounded-[14px] grid place-items-center">
              <p className="text-[#49C96D] text-xl">$</p>
            </div>
            <div className="flex justify-start items-start flex-col gap-1">
              <p className="text-[#8A9099] text-sm leading-[1]">Budget</p>
              <p className="text-dark text-sm leading-[1]">{budget}</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3">
            <div className="bg-[rgba(48,79,253,0.1)] w-[40px] aspect-square rounded-[14px] grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#304FFD"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
            <div className="flex justify-start items-start flex-col gap-1">
              <p className="text-[#8A9099] text-sm leading-[1]">Start Date</p>
              <p className="text-dark text-sm leading-[1]">{start}</p>
            </div>
          </div>
          <div className="flex justify-start items-center gap-3">
            <div className="bg-[rgba(255,150,93,0.1)] w-[40px] aspect-square rounded-[14px] grid place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#FF965D"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>
            </div>
            <div className="flex justify-start items-start flex-col gap-1">
              <p className="text-[#8A9099] text-sm leading-[1]">End Date</p>
              <p className="text-dark text-sm leading-[1]">{end}</p>
            </div>
          </div>
        </div>
      </div>
      {/* //description -------------------------------- */}
      <div className="flex justify-start items-start flex-col gap-2 mt-3">
        <h4 className="uppercase text-[#595F69] text-sm font-medium leading-[1]">
          Description
        </h4>
        <p className="text-sm text-[#595F69]">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectViewDetails;
