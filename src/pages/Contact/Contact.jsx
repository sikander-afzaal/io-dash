import ContactLayout from "../../layout/ContactLayout";
import PersonInfo from "./PersonInfo";
import CompanyInfo from "./CompanyInfo";
import Performance from "./Performance";
import Activity from "./Activity";

const Contact = () => {
  return (
    <ContactLayout>
      <div className="px-4 grid auto-rows-max  gap-5 pb-8 grid-cols-1 md2:grid-cols-2 2xl:grid-cols-4  w-full  ">
        <PersonInfo />
        <CompanyInfo />
        <Performance />
        <Activity />
      </div>
    </ContactLayout>
  );
};

export default Contact;

export const PersonDetails = ({ ico, heading, details, verified, color }) => {
  return (
    <div className="flex justify-start items-center gap-4">
      <div className="rounded-full grid place-items-center text-white bg-[#D5DBE2] w-[30px] aspect-square">
        {ico}
      </div>
      <div className="flex justify-start items-start flex-col gap-1">
        {heading && (
          <p className="text-[#A1A4A8] leading-[1] text-[12px]">
            {heading} {verified && <span className="italic">(Verified)</span>}
          </p>
        )}
        <p
          className={`text-[12px] ${
            verified || color ? "text-electricBlue" : "text-[#74777D]"
          } leading-[1] font-medium`}
        >
          {details}
        </p>
      </div>
    </div>
  );
};
