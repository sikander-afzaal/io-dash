const TopBar = () => {
  return (
    <div className="top w-full flex justify-between items-center px-10">
      <h2 className="font-semibold text-[#384356] text-xl">Projects</h2>
      <input
        type="text"
        placeholder="Search for task and etc"
        className="w-[300px] pl-3 text-gray border-gray border-solid border rounded text-base font-normal outline-none h-[45px] focus:border-black transition-all duration-150"
      />
    </div>
  );
};

export default TopBar;
