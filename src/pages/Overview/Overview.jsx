import OverviewLayout from "../../layout/OverviewLayout";
import OverviewBox from "../../components/OverviewBox";

const Overview = () => {
  const DUMMY__DATA = [
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
    {
      img: "/comp.png",
      name: "Website Redesign",
      platform: "GitLab inc.",
      desc: "It is necessary to develop a website redesign in a corporate style.",
      progress1: "25",
      progress2: "30",
      progress3: "45",
      overall: "75",
      time: "1 week left",
    },
  ];
  return (
    <OverviewLayout>
      <div className="flex justify-start items-start w-full flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-fluid auto-rows-max h-auto gap-y-16 gap-x-10 px-2 sm:px-5 w-full">
          {DUMMY__DATA.map((elem, idx) => {
            return <OverviewBox key={idx + "box"} {...elem} />;
          })}
        </div>
      </div>
    </OverviewLayout>
  );
};

export default Overview;
