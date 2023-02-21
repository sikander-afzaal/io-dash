import OverviewLayout from "../../layout/OverviewLayout";
import OverviewBox from "../../components/OverviewBox";
import { useView } from "../../context/layoutContext";
import OverviewRow from "../../components/OverviewRow";

const Overview = () => {
  const DUMMY__DATA__BOX = [
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
  const DUMMY__DATA__LIST = [
    {
      invoice: "Q01225",
      img: "/comp.png",
      compId: "catalogapp.io",
      company: "Catalog",
      about: "Content curating app",
      aboutDesc: "Brings all your news into one place",
      deadline: "5 Days",
      status: "customer",
      progress: 70,
    },
    {
      invoice: "Q01224",
      img: "/comp.png",
      compId: "catalogapp.io",
      company: "Catalog",
      about: "Content curating app",
      aboutDesc: "Brings all your news into one place",
      deadline: "5 Days",
      status: "customer",
      progress: 30,
    },
    {
      invoice: "Q01223",
      img: "/comp.png",
      compId: "catalogapp.io",
      company: "Catalog",
      about: "Content curating app",
      aboutDesc: "Brings all your news into one place",
      deadline: "5 Days",
      status: "churned",
      progress: 20,
    },
    {
      invoice: "Q01222",
      img: "/comp.png",
      compId: "catalogapp.io",
      company: "Catalog",
      about: "Content curating app",
      aboutDesc: "Brings all your news into one place",
      deadline: "5 Days",
      status: "customer",
      progress: 80,
    },
    {
      invoice: "Q01221",
      img: "/comp.png",
      compId: "catalogapp.io",
      company: "Catalog",
      about: "Content curating app",
      aboutDesc: "Brings all your news into one place",
      deadline: "5 Days",
      status: "churned",
      progress: 5,
    },
  ];

  const { gridView } = useView();

  return (
    <OverviewLayout>
      {gridView ? (
        <div className="flex justify-start items-start w-full flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-fluid auto-rows-max h-auto gap-y-16 gap-x-10 px-2 sm:px-5 w-full">
            {DUMMY__DATA__BOX.map((elem, idx) => {
              return <OverviewBox key={idx + "box"} {...elem} />;
            })}
          </div>
        </div>
      ) : (
        <div className="w-full overflow-x-auto hide-scrollbar">
          <div className="grid grid-cols-1   min-w-[1200px]  w-full">
            <div className="grid bg-[#F9FAFB] border-b border-solid border-[#EAECF0] grid-cols-[100px__1fr__1fr__114px__152px__0.7fr__70px] gap-x-8 w-full py-5 px-2 sm:px-5 ">
              <div className="flex justify-start items-center gap-2">
                <input
                  type="checkbox"
                  readOnly
                  checked={false}
                  className="w-5 aspect-square"
                />
                <p className="text-[#667085] text-sm font-medium">Invoice</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[#667085] text-sm font-medium">Company</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[#667085] text-sm font-medium">About</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[#667085] text-sm font-medium">Deadline</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#667085"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                  />
                </svg>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[#667085] text-sm font-medium">Status</p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <p className="text-[#667085] text-sm font-medium">Progress</p>
              </div>
              <div></div>
            </div>
            {DUMMY__DATA__LIST.map((elem, idx) => {
              return <OverviewRow {...elem} key={idx + "row"} />;
            })}
          </div>
        </div>
      )}
    </OverviewLayout>
  );
};

export default Overview;
