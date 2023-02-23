import OverviewLayout from "../../layout/OverviewLayout";
import ProjectViewSideBox from "../../components/ProjectViewSideBox";
import ProjectViewDetails from "../../components/ProjectViewDetails";
import ProjectViewRightPanel from "./ProjectViewRightPanel";
import { useState } from "react";

const ProjectView = () => {
  const DUMMY__DATA = [
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      active: true,
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },

    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      time: "1 week left",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
    },
  ];
  const [rightPanel, setRightPanel] = useState(false);

  return (
    <OverviewLayout>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr__300px] grid-rows-[auto__1fr] xl:grid-cols-[280px__1fr__280px] 2xl:grid-cols-[380px__1fr__300px] w-full">
        <div className="row-span-1  xl:max-h-screen xl:overflow-y-auto xl:sticky top-0 col-span-2 xl:row-auto xl:col-auto xl:flex-col w-full flex-row flex h-full justify-start items-start xl:border-r border-solid border-[#E8E9EB] hide-scrollbar overflow-x-auto">
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
          className={`lg:sticky hide-scrollbar fixed lg:z-0 z-[50] bg-white lg:max-w-none max-w-[300px] ${
            rightPanel ? "right-0" : "-right-[700px]"
          } transition-all duration-700 top-0 w-full h-full   overflow-y-auto max-h-screen`}
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
