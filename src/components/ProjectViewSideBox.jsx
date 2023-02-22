const ProjectViewSideBox = ({ img, name, platform, time, active }) => {
  return (
    <div
      className={`${
        active ? "bg-white" : "bg-[#F8F8F8]"
      } px-5 py-6 border-b min-w-max border-solid border-[#E8E9EB] w-full flex justify-start items-start gap-4`}
    >
      <div className="bg-white rounded-[14px] w-[48px] aspect-square border border-solid border-[#E8E9EB] flex justify-center items-center">
        <img src={img} className="w-[34px] object-contain" alt="" />
      </div>
      <div className="flex justify-start items-start flex-col gap-2 w-full">
        <h4 className="text-dark leading-[1] text-base font-medium">{name}</h4>
        <p className="text-[#595F69] leading-[1] text-sm ">{platform}</p>
        <div className="w-full justify-between items-center mt-4 flex gap-1">
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
