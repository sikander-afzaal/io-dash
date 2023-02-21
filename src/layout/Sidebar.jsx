const Sidebar = () => {
  return (
    <div className="side hidden sm:block w-full sticky top-0 h-full max-h-screen">
      <div className=" w-full border-r-2 border-solid border-[#E8ECEF] h-full  flex justify-start flex-col py-5 overflow-y-auto items-center">
        <img src="/logo.png" className="w-5 object-contain" alt="" />
        <div className="mt-10 flex justify-start items-center w-full flex-col">
          <SidebarItem color={"border-[#4D7CFE]"} name="PR" />
          <SidebarItem color={"border-[#FE4D97]"} name="HM" />
          <SidebarItem color={"border-[#6DD230]"} name="BD" />
          <SidebarItem color={"border-[#2CE5F6]"} name="CC" />
          <SidebarItem color={"border-[#FFAB2B]"} name="PU" />
          <SidebarItem color={"border-[#6DD230]"} name="MR" />
          <SidebarItem color={"border-[#4D7CFE]"} name="PR" />
          <SidebarItem color={"border-[#FE4D97]"} name="HM" />
          <SidebarItem color={"border-[#6DD230]"} name="BD" />
          <SidebarItem color={"border-[#2CE5F6]"} name="CC" />
          <SidebarItem color={"border-[#FFAB2B]"} name="PU" />
          <SidebarItem color={"border-[#6DD230]"} name="MR" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const SidebarItem = ({ color, name }) => {
  return (
    <div
      className={`hover:bg-[#F8FAFB] w-full h-[46px] border-l-[3px] border-solid  flex justify-center transition-all duration-300 cursor-pointer items-center ${color}`}
    >
      {name}
    </div>
  );
};
