import { useState } from "react";

const Activity = () => {
  const [radioBtn, setRadioBtn] = useState("note");
  const [activityDrop, setActivityDrop] = useState(false);

  return (
    <div className="w-full h-max  bg-white shadow-shadow1 rounded flex justify-start items-start flex-col py-5">
      <h4 className="text-shuttleGray px-5 text-sm font-bold">Activities</h4>
      {/* //top part ---------------- */}
      <div className="flex w-full px-5 mt-4 justify-start items-start flex-col gap-2">
        <div className="w-full flex justify-start items-center gap-6">
          <div
            onClick={() => setRadioBtn("note")}
            className="flex justify-start cursor-pointer items-center gap-2"
          >
            <div
              className={`rounded-full border-[3px] border-solid aspect-square w-[16px] ${
                radioBtn === "note" ? "border-[#1a8fec]" : "border-[#D9D9D9]"
              }`}
            ></div>
            <p
              className={`${
                radioBtn === "note" ? "text-[#1A8FEC]" : "text-[#6C6F78]"
              } text-[15px] font-medium`}
            >
              Note
            </p>
          </div>
          <div
            onClick={() => setRadioBtn("call")}
            className="flex justify-start cursor-pointer items-center gap-2"
          >
            <div
              className={`rounded-full border-[3px] border-solid aspect-square w-[16px] ${
                radioBtn === "call" ? "border-[#1a8fec]" : "border-[#D9D9D9]"
              }`}
            ></div>
            <p
              className={`${
                radioBtn === "call" ? "text-[#1A8FEC]" : "text-[#6C6F78]"
              } text-[15px] font-medium`}
            >
              Call
            </p>
          </div>
          <div
            onClick={() => setRadioBtn("task")}
            className="flex justify-start cursor-pointer items-center gap-2"
          >
            <div
              className={`rounded-full border-[3px] border-solid aspect-square w-[16px] ${
                radioBtn === "task" ? "border-[#1a8fec]" : "border-[#D9D9D9]"
              }`}
            ></div>
            <p
              className={`${
                radioBtn === "task" ? "text-[#1A8FEC]" : "text-[#6C6F78]"
              } text-[15px] font-medium`}
            >
              Task
            </p>
          </div>
          <div
            onClick={() => setRadioBtn("action")}
            className="flex justify-start cursor-pointer items-center gap-2"
          >
            <div
              className={`rounded-full border-[3px] border-solid aspect-square w-[16px] ${
                radioBtn === "action" ? "border-[#1a8fec]" : "border-[#D9D9D9]"
              }`}
            ></div>
            <p
              className={`${
                radioBtn === "action" ? "text-[#1A8FEC]" : "text-[#6C6F78]"
              } text-[15px] font-medium`}
            >
              Action
            </p>
          </div>
        </div>
        <div className="w-full mt-1">
          {radioBtn === "note" && (
            <div className="flex justify-start items-start flex-col gap-3">
              <textarea
                placeholder="Type a note..."
                className="w-full border text-xs border-[#E3E3E4] border-solid h-[120px] resize-none pl-3 pt-3 rounded-sm"
              ></textarea>
              <div className="flex justify-start items-center gap-3">
                <button className="w-[140px] h-[40px] text-white text font-semibold bg-electricBlue rounded border-none">
                  Log Note
                </button>
                <div className="flex justify-start items-center gap-2">
                  <input type="checkbox" id="pin" />
                  <label
                    htmlFor="pin"
                    className="text-[#8C8F9A] text-xs font-normal"
                  >
                    Pin note to top
                  </label>
                </div>
              </div>
              <div className="flex justify-start overflow-hidden items-start flex-col w-full">
                <button
                  onClick={() => setActivityDrop((prev) => !prev)}
                  className="flex justify-between items-center w-full bg-[#F8F9FB] py-2 px-5"
                >
                  <p className="text-black font-semibold text-base">
                    Activities
                  </p>
                  <p className="text-[#1890ED] text-base flex justify-center items-center gap-1">
                    All Activity Type{" "}
                    <svg
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        activityDrop ? "rotate-180" : "rotate-0"
                      } transition-all duration-500`}
                    >
                      <path
                        d="M6 8L-2.16164e-06 -1.04907e-06L12 0L6 8Z"
                        fill="#1890ED"
                      />
                    </svg>
                  </p>
                </button>
                <div
                  className={`flex w-full ${
                    activityDrop ? "max-h-[3000px]" : "max-h-0"
                  } transition-all duration-500 justify-start items-start flex-col`}
                >
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                  <ActivityComponent />
                  <button className="text-electricBlue border-none bg-transparent font-semibold text-base flex justify-center items-center w-full pt-5">
                    Show in Window View
                  </button>
                </div>
              </div>
            </div>
          )}
          {radioBtn === "call" && (
            <div className="flex justify-start items-start flex-col gap-3">
              <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                <option value="#">Select disposition</option>
              </select>
              <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                <option value="#">Select purpose</option>
              </select>
              <textarea
                placeholder="Type a note..."
                className="w-full border text-xs border-[#E3E3E4] border-solid h-[120px] resize-none pl-3 pt-3 rounded-sm"
              ></textarea>
              <button className="w-[140px] h-[40px] text-white text font-semibold bg-electricBlue rounded border-none">
                Log Note
              </button>
            </div>
          )}
          {radioBtn === "task" && (
            <div className="flex justify-start items-start flex-col gap-3">
              <div className="flex justify-start items-center w-full gap-3">
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Rae Draizen</option>
                </select>
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Priority</option>
                </select>
              </div>
              <div className="flex justify-start items-center w-full gap-3">
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Task</option>
                </select>
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Assigned to</option>
                </select>
              </div>
              <div className="flex justify-start items-center w-full gap-3">
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Choose date</option>
                </select>
                <select className="w-full h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#A2A7AD] text-xs font-medium">
                  <option value="#">Choose time</option>
                </select>
              </div>
              <textarea
                placeholder="Type a note..."
                className="w-full border text-xs border-[#E3E3E4] border-solid h-[120px] resize-none pl-3 pt-3 rounded-sm"
              ></textarea>
              <div className="flex justify-start items-center gap-4">
                <button className="w-[140px] h-[40px] text-white text font-semibold bg-[#949FB3] rounded border-none">
                  Create Task
                </button>
                <button className="w-[100px] h-[40px] text-[#5F666C] text font-semibold bg-transparent rounded border border-solid border-[#E7E6EC] ">
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* //bottom part ------------------------------- */}
      <div className="flex justify-start items-start mt-8 flex-col w-full">
        <div className="flex justify-start items-center gap-3 px-5">
          <select className="w-[150px] h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#62666F] text-xs font-medium">
            <option value="#">All activity</option>
          </select>
          <select className="w-[150px] h-[40px] pl-1 border border-solid border-[#E3E3E4] rounded-sm text-[#62666F] text-xs font-medium">
            <option value="#">All time</option>
          </select>
        </div>
        <div className="flex justify-start items-start flex-col gap-6 w-full border-t border-solid border-[#E3E3E4] py-5 px-5 mt-5">
          <MailComponent />
          <MailComponent />
          <MailComponent />
        </div>
        <div className="flex justify-start items-start flex-col gap-6 w-full border-t border-solid border-[#E3E3E4] py-5 px-5 mt-5">
          <MailComponent />
          <MailComponent />
        </div>
        <div className="flex justify-start items-start flex-col gap-6 w-full border-t border-solid border-[#E3E3E4] py-5 px-5 mt-5">
          <MailComponent />
          <MailComponent />
          <MailComponent />
          <MailComponent />
        </div>
      </div>
    </div>
  );
};

export default Activity;

const MailComponent = () => {
  return (
    <div className="flex justify-start items-center gap-3">
      <div className="rounded-full bg-[#FDBF43] aspect-square min-w-[30px] grid place-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-4 h-4"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
      </div>
      <div className="gap-1 flex justify-start items-start flex-col">
        <p className="text-xs text-[#A1A4A8]">
          Apollo’s automatic email fulfillment found a{" "}
          <span className="text-[#646464] font-semibold">verified email</span>{" "}
          <a href="mailto:julie.hafemann@tsia.com" className="text-cyanBlue">
            julie.hafemann@tsia.com
          </a>
        </p>
        <p className="text-[#747a80] text-[10px]">Jun 28, 2020 10:00 PM</p>
      </div>
    </div>
  );
};

const ActivityComponent = () => {
  return (
    <div className="flex py-5 border-b border-solid border-[#E3E3E4] w-full justify-start items-start flex-col gap-3">
      <p className="text-[#4B4A50] text-sm">
        Account for <span className="text-electricBlue">Tim Zheng</span> was
        changed from <span className="text-electricBlue">Apollo</span> to{" "}
        <span className="text-electricBlue">Apollo</span> based on its
        salesforce record.
      </p>
      <div className="flex justify-between w-full items-center gap-1">
        <div className="flex justify-start items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#9AA2B8"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
          <p className="text-xs text-[#9aa2bb]">2 Events</p>
          <span className="inline-block w-[4px] aspect-square rounded-full bg-[#9AA2B8]"></span>
          <p className="text-xs text-[#9aa2bb]">2:00 AM</p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#9AA2B8"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </div>
  );
};
