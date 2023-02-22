const ProjectViewSideBox = ({
  img,
  name,
  platform,
  time,
  active,
  progress1,
  progress2,
  progress3,
  overall,
}) => {
  return (
    <div
      className={`${
        active ? "bg-white" : "bg-[#F8F8F8]"
      } px-5 py-6 border-b 2xl:flex-row xl:flex-col flex-row min-w-max border-solid border-[#E8E9EB] w-full flex justify-start items-start gap-4`}
    >
      <div className="bg-white rounded-[14px] w-[48px] aspect-square border border-solid border-[#E8E9EB] flex justify-center items-center">
        <img src={img} className="w-[34px] object-contain" alt="" />
      </div>
      <div className="flex justify-start items-start flex-col gap-2 w-full">
        <h4 className="text-dark leading-[1] text-base font-medium">{name}</h4>
        <p className="text-[#595F69] leading-[1] text-sm ">{platform}</p>
        {/* //progress div -------------------- */}
        <div className="w-full flex justify-start items-center flex-col gap-1">
          <div className="flex justify-between items-center w-full">
            <p className="text-[#595F69] text-sm">Progress</p>
            <p className="text-[#8A9099] text-sm">{overall}%</p>
          </div>
          <div className="flex justify-start items-center gap-1 w-full">
            <div
              style={{ width: progress1 + "%" }}
              className={`rounded-full h-[12px] bg-[#47A8F7]`}
            ></div>
            <div
              style={{ width: progress2 + "%" }}
              className={`bg-[#7F80E9] rounded-full h-[12px]`}
            ></div>
            <div
              style={{ width: progress3 + "%" }}
              className={`bg-[#F3A23A] rounded-full h-[12px]`}
            ></div>
          </div>
          <div className="flex justify-start flex-row xl:flex-col items-start w-full gap-3 mt-3">
            <div className="flex justify-start items-start flex-col gap-2">
              <p className="text-[#8A9099] text-xs leading-[1]">Signed</p>
              <p className="text-dark  leading-[1] font-medium">
                <span className="inline-block w-[10px] aspect-square bg-[#47A8F7] rounded"></span>{" "}
                12
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <p className="text-[#8A9099] text-xs leading-[1]">
                Waiting signature
              </p>
              <p className="text-dark leading-[1] font-medium">
                <span className="inline-block w-[10px] aspect-square bg-[#7F80E9] rounded"></span>{" "}
                17
              </p>
            </div>
            <div className="flex justify-start items-start flex-col gap-2">
              <p className="text-[#8A9099] text-xs leading-[1]">
                Manager review
              </p>
              <p className="text-dark leading-[1] font-medium">
                <span className="inline-block w-[10px] aspect-square bg-[#F3A23A] rounded"></span>{" "}
                22
              </p>
            </div>
          </div>
        </div>
        <div className="w-full 2xl:flex-row flex-row xl:flex-col justify-between items-start 2xl:items-center mt-4 flex xl:gap-5 2xl:gap-0">
          <div className="flex justify-center items-center gap-1">
            <img
              src="/user (1).png"
              className="w-[30px] aspect-square rounded-full object-contain"
              alt=""
            />
            <img
              src="/user (2).png"
              className="w-[30px] aspect-square rounded-full object-contain"
              alt=""
            />
            <img
              src="/user (3).png"
              className="w-[30px] aspect-square rounded-full object-contain"
              alt=""
            />
          </div>
          <div className="flex gap-1 justify-center bg-[#E8E9EB] rounded-[8px] px-2 py-2 items-center text-dark text-sm leading-[1]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {time}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectViewSideBox;
