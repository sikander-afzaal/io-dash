import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

const ProjectViewRightPanel = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [dropVal, setDropVal] = useState("started");
  const dropDownRef = useOutsideClick(outsideClickFunc);
  function outsideClickFunc() {
    setOpenDrop(false);
  }

  return (
    <div className="flex min-h-full justify-start w-full items-center flex-col gap-5 px-5 pb-8 pt-14 lg:py-8 border-l border-[#E8E9EB] border-solid h-full">
      {/* //drop down ------------------------- */}
      <div
        ref={dropDownRef}
        className="flex justify-start items-start w-full flex-col gap-0 relative"
      >
        <button
          onClick={() => setOpenDrop((prev) => !prev)}
          className="flex justify-between items-center gap-1 px-4 w-full bg-[#F8F8F8] rounded-[14px] h-[40px]"
        >
          <div className="flex justify-start items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3F434A"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            <p className="text-dark text-sm capitalize">{dropVal}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#8A9099"
            className={`w-4 h-4 transition-all duration-200 ${
              openDrop ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        {openDrop && (
          <div className="w-full absolute left-0 top-full z-[10] bg-white drop-shadow-dropDown flex justify-start items-start flex-col gap-5 py-6 rounded-[14px]">
            <button
              onClick={() => {
                setDropVal("started");
                setOpenDrop(false);
              }}
              className="flex bg-transparent border-none justify-start items-center w-full px-5 gap-2 relative"
            >
              <span className="rounded bg-[#FFD240] w-[14px] aspect-square"></span>
              Started
              {dropVal === "started" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#304FFD"
                  className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                setDropVal("on hold");
                setOpenDrop(false);
              }}
              className="flex bg-transparent border-none justify-start items-center w-full px-5 gap-2 relative"
            >
              <span className="rounded bg-[#22CCE2] w-[14px] aspect-square"></span>
              On Hold
              {dropVal === "on hold" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#304FFD"
                  className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
            <button
              onClick={() => {
                setDropVal("completed");
                setOpenDrop(false);
              }}
              className="flex bg-transparent border-none justify-start items-center w-full px-5 gap-2 relative"
            >
              <span className="rounded bg-[#49C96D] w-[14px] aspect-square"></span>
              Completed
              {dropVal === "completed" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#304FFD"
                  className="w-4 h-4 absolute right-5 top-1/2 -translate-y-1/2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
      <div className="flex mt-4 justify-start pb-5 border-b border-solid border-[#E8E9EB] items-start flex-col gap-3 w-full">
        <h4 className="uppercase font-medium text-dark text-sm">Created by</h4>
        <MemberRow img="/user (1).png" name="Shane Black" />
      </div>
      <div className="flex mt-2 justify-start pb-5 border-b border-solid border-[#E8E9EB] items-start flex-col gap-6 w-full">
        <div className="w-full -mb-1 justify-between items-center flex">
          <h4 className="uppercase font-medium text-dark text-sm">Members</h4>
          <div className="aspect-square cursor-pointer w-[30px] bg-[#F8F8F8] grid place-items-center text-dark rounded-[10px]">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <MemberRow
          img="/user (2).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
        <MemberRow
          img="/user (3).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
        <MemberRow
          img="/user (1).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
        <MemberRow
          img="/user (2).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
        <MemberRow
          img="/user (3).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
        <MemberRow
          img="/user (1).png"
          name="Jacob Hawkins"
          role="UI/UX Designer"
        />
      </div>
      <div className="flex mt-2 justify-start pb-5 items-start flex-col gap-6 w-full">
        <div className="w-full -mb-1 justify-between items-center flex">
          <h4 className="uppercase font-medium text-dark text-sm">Files</h4>
          <div className="aspect-square cursor-pointer w-[30px] bg-[#F8F8F8] grid place-items-center text-dark rounded-[10px]">
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
        <FileRow img="/file.png" name="Wireframe UI Kit.zip" size="5.8 MB" />
      </div>
    </div>
  );
};

export default ProjectViewRightPanel;

const MemberRow = ({ img, name, role }) => {
  return (
    <div className="flex justify-start items-center gap-3">
      <img src={img} className="rounded-full w-[40px] aspect-square" alt="" />
      <div className="flex justify-start items-start flex-col gap-1">
        <p className="leading-[1] text-dark text-sm">{name}</p>
        {role && <p className="leading-[1] text-[#8A9099] text-xs">{role}</p>}
      </div>
    </div>
  );
};
const FileRow = ({ img, name, size }) => {
  return (
    <div className="flex justify-between w-full items-center gap-3">
      <div className="flex justify-start items-center gap-3">
        <img src={img} className=" w-[31px] h-[40px]" alt="" />
        <div className="flex justify-start items-start flex-col gap-1">
          <p className="leading-[1] text-dark text-sm">{name}</p>
          {size && <p className="leading-[1] text-[#8A9099] text-xs">{size}</p>}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="#8A9099"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    </div>
  );
};
