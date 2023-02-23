import { PersonDetails } from "./Contact";

const CompanyInfo = () => {
  return (
    <div className="w-full gap-5 flex justify-start items-start flex-col ">
      {/* //company info ------------------------ */}
      <div className="bg-white gap-5 shadow-shadow1 rounded flex justify-start items-start flex-col p-5 w-full">
        <h4 className="text-[#5F636F] text-sm font-bold">Company Info</h4>
        <div className="flex justify-start items-center gap-3">
          <img
            src="/comp-info.png"
            className="w-[64px] aspect-square rounded-full"
            alt=""
          />
          <div className="flex  justify-start items-start flex-col gap-3">
            <h4 className="text-[#5F636F] text-sm font-bold">Peanut</h4>

            <p className="text-xs text-[#A1A4A8] ">
              {`Peanut is a social networking app to meet, chat and social
          networking app to meet, chat and`.slice(0, 51) + "..."}
              <a href="#" className="text-[#0F6FDC] ml-1">
                Readmore
              </a>
            </p>
            <div className="flex justify-start items-center gap-3">
              <a
                href="#"
                target={"blank"}
                className="w-[34px] text-[#A0A0A0] grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clip-rule="evenodd"
                    d="M7.86748 2.08968C8.43154 1.52559 9.34609 1.52559 9.91022 2.08968C10.4743 2.65377 10.4743 3.56834 9.91022 4.13244L7.74355 6.2991C7.17942 6.86323 6.26487 6.86323 5.70079 6.2991C5.41874 6.01707 4.96145 6.01707 4.67941 6.2991C4.39736 6.58113 4.39736 7.03844 4.67941 7.32047C5.80759 8.44865 7.63673 8.44865 8.76491 7.32047L10.9316 5.15382C12.0598 4.02563 12.0598 2.19649 10.9316 1.0683C9.8034 -0.0598765 7.9743 -0.0598765 6.84611 1.0683L5.76275 2.15164C5.4807 2.43369 5.4807 2.89097 5.76275 3.17302C6.0448 3.45506 6.50204 3.45506 6.78414 3.17302L7.86748 2.08968ZM4.25635 5.7008C4.82044 5.13671 5.73501 5.13671 6.2991 5.7008C6.58113 5.98284 7.03844 5.98284 7.32047 5.7008C7.60257 5.41875 7.60257 4.96147 7.32047 4.67942C6.19228 3.55124 4.36316 3.55124 3.23497 4.67942L1.0683 6.84611C-0.0598765 7.9743 -0.0598765 9.8034 1.0683 10.9316C2.19649 12.0598 4.02563 12.0598 5.15382 10.9316L6.23713 9.84825C6.51923 9.56622 6.51923 9.10891 6.23713 8.82688C5.9551 8.54485 5.49782 8.54485 5.21577 8.82688L4.13244 9.91022C3.56834 10.4743 2.65378 10.4743 2.08968 9.91022C1.52559 9.34616 1.52559 8.43154 2.08968 7.86748L4.25635 5.7008Z"
                    fill="#A0A0A0"
                  />
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-[34px] text-[#A0A0A0] grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.39437 12C2.77687 12 1.26909 11.5091 0 10.6621C1.0775 10.7348 2.97903 10.5606 4.16179 9.38337C2.38254 9.29817 1.58013 7.87424 1.47547 7.26572C1.62665 7.32657 2.34765 7.39959 2.75467 7.22921C0.707949 6.69371 0.393964 4.81947 0.463738 4.24746C0.847498 4.52738 1.49873 4.62475 1.75457 4.60041C-0.152604 3.17647 0.533513 1.03448 0.870757 0.572008C2.23941 2.55061 4.2906 3.66186 6.82819 3.72367C6.78034 3.50471 6.75508 3.27674 6.75508 3.0426C6.75508 1.36222 8.05671 0 9.66235 0C10.5013 0 11.2572 0.371872 11.7878 0.966698C12.3485 0.82962 13.1922 0.508731 13.6046 0.231237C13.3967 1.01014 12.7495 1.65991 12.358 1.90074C12.3548 1.89251 12.3612 1.90893 12.358 1.90074C12.7019 1.84645 13.6324 1.65984 14 1.39959C13.8182 1.83717 13.132 2.56473 12.5689 2.97205C12.6736 7.79377 9.13824 12 4.39437 12Z"
                    fill="#A0A0A0"
                  />
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-[34px] text-[#A0A0A0] grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 11 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clip-rule="evenodd"
                    d="M1.46664 1.62409C3.42216 -0.24514 6.59269 -0.24514 8.54816 1.62409C10.5037 3.49332 10.5037 6.52396 8.54816 8.39315L5.00742 11.7777L1.46664 8.39315C-0.488879 6.52396 -0.488879 3.49332 1.46664 1.62409ZM5.00742 6.3762C5.79759 6.3762 6.43811 5.76394 6.43811 5.00864C6.43811 4.25335 5.79759 3.64107 5.00742 3.64107C4.21727 3.64107 3.57673 4.25335 3.57673 5.00864C3.57673 5.76394 4.21727 6.3762 5.00742 6.3762Z"
                    fill="#A0A0A0"
                  />
                </svg>
              </a>
              <a
                href="#"
                target={"blank"}
                className="w-[34px] text-[#A0A0A0] grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="10" height="10" fill="#A0A0A0" />
                  <path
                    d="M3.79234 2.74722C3.79234 3.08099 3.50304 3.35156 3.14617 3.35156C2.7893 3.35156 2.5 3.08099 2.5 2.74722C2.5 2.41346 2.7893 2.14288 3.14617 2.14288C3.50304 2.14288 3.79234 2.41346 3.79234 2.74722Z"
                    fill="white"
                  />
                  <path
                    d="M2.58837 3.79578H3.69293V7.14288H2.58837V3.79578Z"
                    fill="white"
                  />
                  <path
                    d="M5.47128 3.79578H4.36672V7.14288H5.47128C5.47128 7.14288 5.47128 6.08916 5.47128 5.43033C5.47128 5.03489 5.60631 4.63772 6.14507 4.63772C6.75393 4.63772 6.75027 5.15522 6.74743 5.55613C6.74372 6.08018 6.75258 6.61497 6.75258 7.14288H7.85714V5.37635C7.84779 4.24838 7.55386 3.72863 6.58689 3.72863C6.01264 3.72863 5.65668 3.98933 5.47128 4.2252V3.79578Z"
                    fill="white"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 w-full">
          <PersonDetails
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
            details="+1 (212) XXX  XXXX"
            heading="Direct"
            verified
          />
          <button className="bg-transparent hover:bg-[#A1A4A8] border border-[#A1A4A8] border-solid rounded w-[130px] h-[40px] text-[#7E8189] hover:text-white transition-all duration-300 text-xs font-semibold">
            Request Email
          </button>
        </div>
        <div className="flex justify-between items-center gap-2 w-full">
          <PersonDetails
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            }
            heading="Employees"
            details="51 - 2000"
            color
          />
          <div className="w-[34px] grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#A0A0A0"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between items-center gap-2 w-full">
          <PersonDetails
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M3 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5H15v-18a.75.75 0 000-1.5H3zM6.75 19.5v-2.25a.75.75 0 01.75-.75h3a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-3a.75.75 0 01-.75-.75zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 010 1.5h-.75A.75.75 0 016 6.75zM6.75 9a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM6 12.75a.75.75 0 01.75-.75h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 6a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zm-.75 3.75A.75.75 0 0110.5 9h.75a.75.75 0 010 1.5h-.75a.75.75 0 01-.75-.75zM10.5 12a.75.75 0 000 1.5h.75a.75.75 0 000-1.5h-.75zM16.5 6.75v15h5.25a.75.75 0 000-1.5H21v-12a.75.75 0 000-1.5h-4.5zm1.5 4.5a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008zm.75 2.25a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75v-.008a.75.75 0 00-.75-.75h-.008zM18 17.25a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
                  clipRule="evenodd"
                />
              </svg>
            }
            heading="Industry"
            details="Retail and Technology"
            color
          />
        </div>
      </div>
      {/* //projects ----------------------------------------- */}
      <div className="bg-white gap-3 shadow-shadow1 rounded flex justify-start items-start flex-col p-5 w-full">
        <h4 className="text-[#5F636F] text-sm font-bold flex justify-start gap-2 items-center">
          Projects{" "}
          <span className="bg-[#D3EBE9] rounded-full text-[#1E8B82] text-[7px] font-semibold  w-[18px] aspect-square grid place-items-center leading-[1]">
            47
          </span>
        </h4>
        <input
          type="text"
          placeholder="Search Projects"
          className="w-full border border-solid border-[#E3E3E4] bg-transparent text-[#979797] text-sm rounded h-[40px] pl-2"
        />
        <div className="flex justify-start items-start flex-col w-full">
          {Array(3)
            .fill(false)
            .map((elem, idx) => {
              return (
                <SearchItem
                  key={idx + new Date()}
                  name="KOL Market Assesment"
                  desc="Apple"
                />
              );
            })}
        </div>
      </div>
      {/* //Events ---------------------------------------------------_ */}
      <div className="bg-white gap-3 shadow-shadow1 rounded flex justify-start items-start flex-col p-5 w-full">
        <h4 className="text-[#5F636F] text-sm font-bold flex justify-start gap-2 items-center">
          Events{" "}
          <span className="bg-[#D3EBE9] rounded-full text-[#1E8B82] text-[7px] font-semibold  w-[18px] aspect-square grid place-items-center leading-[1]">
            47
          </span>
        </h4>
        <input
          type="text"
          placeholder="Search Projects"
          className="w-full border border-solid border-[#E3E3E4] bg-transparent text-[#979797] text-sm rounded h-[40px] pl-2"
        />
        <div className="flex justify-start items-start flex-col w-full">
          {Array(3)
            .fill(false)
            .map((elem, idx) => {
              return (
                <SearchItem
                  key={idx + new Date()}
                  name="Congress 1"
                  desc="Apple"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

const SearchItem = ({ img, name, desc }) => {
  return (
    <div className="flex justify-start items-center gap-4 w-full border-b border-solid border-[#E3E3E4] py-4">
      <span className="inline-block rounded-full aspect-square w-[32px] bg-[#E8ECEF]"></span>
      <div className="flex justify-start items-start flex-col gap-1">
        <p className="text-[#5F636F] text-xs font-medium">{name}</p>
        <p className="text-[#A1A4A8] text-[10px]">{desc}</p>
      </div>
    </div>
  );
};
