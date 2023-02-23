const Performance = () => {
  return (
    <div className="w-full gap-5 flex justify-start items-start flex-col">
      <div className="bg-white gap-5 shadow-shadow1 rounded flex justify-start items-start flex-col p-5 w-full">
        <h4 className="text-[#5F636F] text-sm font-bold">
          Brand Advocacy Scores
        </h4>
        <img
          src="/Histo.png"
          className="w-full max-w-[250px] mt-4 object-contain"
          alt=""
        />
      </div>
      <div className="bg-white gap-5 shadow-shadow1  rounded flex justify-start items-start flex-col p-5 w-full">
        <h4 className="text-[#5F636F] text-sm font-bold">
          Procedures Performed
        </h4>
        <img
          src="/scores.png"
          className="w-full max-w-[280px] mt-4 object-contain"
          alt=""
        />
      </div>
    </div>
  );
};

export default Performance;
