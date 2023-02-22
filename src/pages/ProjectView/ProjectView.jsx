import OverviewLayout from "../../layout/OverviewLayout";
import ProjectViewSideBox from "../../components/ProjectViewSideBox";
import ProjectViewDetails from "../../components/ProjectViewDetails";
import ProjectViewRightPanel from "../../components/ProjectViewRightPanel";
import { useState } from "react";

const ProjectView = () => {
  const DUMMY__DATA = [
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      active: true,
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
    },
  ];
  const [rightPanel, setRightPanel] = useState(false);

  return (
    <OverviewLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr__300px] grid-rows-[auto__1fr] 2xl:grid-cols-[380px__1fr__300px] w-full">
        <div className="row-span-1 col-span-2 2xl:row-auto 2xl:col-auto 2xl:flex-col w-full flex-row flex h-full justify-start items-start 2xl:border-r border-solid border-[#E8E9EB] hide-scrollbar overflow-x-auto">
          {DUMMY__DATA.map((elem, idx) => {
            return <ProjectViewSideBox {...elem} key={idx + "sideview"} />;
          })}
        </div>
        <ProjectViewDetails
          rightPanel={setRightPanel}
          name="Website Redesign"
          company="GitLab Inc."
          img="/comp.png"
          budget="2.500.000"
          start="17 Jun, 2020"
          end="04 Jul, 2020"
          desc="You need to develop an application on something like React native, so that it is for Android and IOS. There are about 30 screens, the design and layout in the sketch is ready. The main pages are login, getting a task, a list of tasks, a map, a history of tasks, calling the camera to complete a task. The storage and processing server is on our side, there is a ready-made api for the web service that you will need to use."
        />
        {rightPanel && (
          <div onClick={() => setRightPanel(false)} className="overlay"></div>
        )}
        <div
          className={`lg:static fixed z-[50] bg-white lg:max-w-none max-w-[300px] ${
            rightPanel ? "right-0" : "-right-[700px]"
          } transition-all duration-700 top-0 w-full h-full lg:max-h-none lg:overflow-visible overflow-y-auto max-h-screen`}
        >
          <svg
            onClick={() => setRightPanel(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#3F434A"
            className="absolute top-3  left-3 w-6 h-6 lg:hidden block cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <ProjectViewRightPanel />
        </div>
      </div>
    </OverviewLayout>
  );
};

export default ProjectView;
