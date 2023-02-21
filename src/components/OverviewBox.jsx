import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";
const OverviewBox = ({
  img,
  name,
  platform,
  desc,
  progress1,
  progress2,
  progress3,
  overall,
  time,
}) => {
  const outSideClickFunc = () => {
    setActiveDrop(false);
  };
  const [activeDrop, setActiveDrop] = useState(false);
  const outsideClickRef = useOutsideClick(outSideClickFunc);
  return (
    <div className="flex justify-start gap-4 items-start flex-col w-full bg-white rounded-[20px] p-5 drop-shadow-box">
      {/* //top part of box ------- */}
      <div className="w-full relative flex justify-between items-center gap-2">
        {/* //drop down ----------------------------------- */}
        {activeDrop && (
          <div
            ref={outsideClickRef}
            className="flex justify-start items-start flex-col drop-shadow-dropDown pt-2 w-full max-w-[224px] bg-white absolute z-20 right-0 overflow-hidden top-[80%] rounded-lg"
          >
            <div
              onClick={() => setActiveDrop(false)}
              className="flex hover:bg-[#F8FAFB] transition-all duration-150 cursor-pointer justify-start items-center w-full px-5 py-3 gap-3 text-[#595F69]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <p className="text-[15px]">Edit</p>
            </div>
            <div
              onClick={() => setActiveDrop(false)}
              className="flex hover:bg-[#F8FAFB] transition-all duration-150 cursor-pointer justify-start items-center w-full px-5 py-3 gap-3 text-[#595F69]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>

              <p className="text-[15px]">Add Member</p>
            </div>
            <div
              onClick={() => setActiveDrop(false)}
              className="flex hover:bg-[#F8FAFB] transition-all duration-150 cursor-pointer justify-start items-center w-full px-5 py-3 gap-3 text-[#595F69]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-[15px]">Add Due Date</p>
            </div>
            <div
              onClick={() => setActiveDrop(false)}
              className="flex border-t border-solid border-[#E8E9EB] hover:bg-[#F8FAFB] transition-all duration-150 cursor-pointer justify-start items-center w-full px-5 py-5 gap-3 text-[#FD7972]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>

              <p className="text-[15px]">Delete Project</p>
            </div>
          </div>
        )}
        {/* //drop down ends ----------------------------------- */}
        <div className="flex justify-start items-center gap-2">
          <div className="bg-white rounded-[14px] w-[48px] aspect-square border border-solid border-[#E8E9EB] flex justify-center items-center">
            <img src={img} className="w-[34px] object-contain" alt="" />
          </div>
          <div className="flex justify-start items-start flex-col gap-1">
            <h4 className="text-dark leading-[1] text-lg font-medium">
              {name}
            </h4>
            <p className="text-[#595F69] leading-[1] text-sm ">{platform}</p>
          </div>
        </div>
        <svg
          onClick={() => setActiveDrop((prev) => !prev)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#8A9099"
          className="w-6 h-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <p className="text-[#595F69] text-sm font-normal">{desc}</p>
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
        <div className="flex justify-start items-start w-full gap-1 mt-3">
          <div
            style={{ width: progress1 + "%" }}
            className="flex justify-start items-start flex-col gap-2"
          >
            <p className="text-[#8A9099] text-xs leading-[1]">Signed</p>
            <p className="text-dark  leading-[1] font-medium">
              <span className="inline-block w-[10px] aspect-square bg-[#47A8F7] rounded"></span>{" "}
              12
            </p>
          </div>
          <div
            style={{ width: progress2 + "%" }}
            className="flex justify-start items-start flex-col gap-2"
          >
            <p className="text-[#8A9099] text-xs leading-[1]">
              Waiting signature
            </p>
            <p className="text-dark leading-[1] font-medium">
              <span className="inline-block w-[10px] aspect-square bg-[#7F80E9] rounded"></span>{" "}
              17
            </p>
          </div>
          <div
            style={{ width: progress3 + "%" }}
            className="flex justify-start items-start flex-col gap-2"
          >
            <p className="text-[#8A9099] text-xs leading-[1]">Manager review</p>
            <p className="text-dark leading-[1] font-medium">
              <span className="inline-block w-[10px] aspect-square bg-[#F3A23A] rounded"></span>{" "}
              22
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full items-center">
        <div className="flex gap-1 justify-center bg-[#F8F8F8] rounded-[8px] px-2 py-1 items-center text-dark text-sm leading-[1]">
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
      </div>
    </div>
  );
};

export default OverviewBox;
