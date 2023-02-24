import { PersonDetails } from "./Contact";

const PersonInfo = () => {
  return (
    <div className="w-full h-max bg-white shadow-shadow1 rounded flex justify-start items-start flex-col p-5">
      <img
        src="/test-user.png"
        className="w-[48px] aspect-square rounded-full"
        alt=""
      />
      <div className="flex gap-5 mt-5 justify-start items-start flex-col w-full">
        <div className="flex justify-between items-center gap-2 w-full">
          <PersonDetails
            ico={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            }
            details="t****@apollo.com"
            heading="Email"
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
            heading="Mobile"
            verified
          />{" "}
          <button className="bg-transparent hover:bg-[#A1A4A8] border border-[#A1A4A8] border-solid rounded w-[130px] h-[40px] text-[#7E8189] hover:text-white transition-all duration-300 text-xs font-semibold">
            Request Numbers
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
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
            }
            heading="Contact Stage"
          />
          <button className="bg-[#42C1A1] hover:bg-transparent border border-[#42C1A1] border-solid rounded w-[130px] h-[40px] text-white hover:text-black transition-all duration-300 text-xs font-semibold">
            NET NEW
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
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                  clipRule="evenodd"
                />
              </svg>
            }
            heading="Owner"
            details="Krishan Patel"
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
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            heading="Location"
            details="Portland, Oregon (12:30 PM)"
          />
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
                <path d="M15.75 8.25a.75.75 0 01.75.75c0 1.12-.492 2.126-1.27 2.812a.75.75 0 11-.992-1.124A2.243 2.243 0 0015 9a.75.75 0 01.75-.75z" />
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM4.575 15.6a8.25 8.25 0 009.348 4.425 1.966 1.966 0 00-1.84-1.275.983.983 0 01-.97-.822l-.073-.437c-.094-.565.25-1.11.8-1.267l.99-.282c.427-.123.783-.418.982-.816l.036-.073a1.453 1.453 0 012.328-.377L16.5 15h.628a2.25 2.25 0 011.983 1.186 8.25 8.25 0 00-6.345-12.4c.044.262.18.503.389.676l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.575 15.6z"
                  clipRule="evenodd"
                />
              </svg>
            }
            heading="Other Details"
          />
          <div className="flex items-center gap-2">
            <a
              href="#"
              target={"blank"}
              className="w-[34px] text-dawn grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
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
            <a
              href="#"
              target={"blank"}
              className="w-[34px] text-dawn grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              target={"blank"}
              className="w-[34px] text-dawn grid place-items-center cursor-pointer hover:bg-[#E5E9EE] transition-all aspect-square border border-solid border-[#E5E9EE] rounded-lg"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68522 9.31957C3.88355 10.2843 5.11349 10.0686 5.96544 9.61803C6.44988 9.3618 7.11089 9.38134 7.65845 9.40401C10.5354 9.5231 16.4328 3.00845 12.9105 3.39557C8.95932 3.82982 10.7154 -1.38125 8.08128 0.355772C7.16355 0.960951 6.26802 1.14883 5.48897 1.12028C4.60065 1.08773 3.3302 1.87715 3.12388 2.7418C2.89981 3.68085 2.42142 4.51525 1.49593 4.69834C0.133134 4.96794 -0.0839471 6.12672 0.0239612 7.03815C0.074426 7.46439 0.470821 7.7277 0.892802 7.80619C1.4572 7.91118 2.06779 8.15307 2.28843 8.63539C2.39954 8.87829 2.47715 9.15207 2.68522 9.31957Z"
                  fill="#A0A0A0"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between mt-5 items-center border border-[#A1A4A8] border-solid p-3 rounded">
        <img src="/graph1.png" className="w-[120px] object-contain" alt="" />
        <div className="flex justify-start items-start flex-col">
          <p className="font-medium text-[#7E8189] text-xs">Last 12 Months</p>
          <p className="font-medium flex justify-start items-center gap-1 text-xs">
            <span className="text-[#02C697]">3 Inbound</span>{" "}
            <span className="inline-block bg-[#7E8189] rounded-full w-[5px] aspect-square"></span>{" "}
            <span className="text-[#E74D2E]">2 Outbound</span>
          </p>
        </div>
      </div>
      <div className="flex w-full justify-start items-start flex-col gap-2 mt-5">
        <h4 className="text-[#5F636F] text-sm font-semibold ">Reach</h4>
        <div className="w-full grid gap-x-4 grid-cols-[2fr__1fr]">
          <p className="flex justify-between items-center text-[#A1A4A8] text-sm">
            Linkedin <span className="#646464 font-bold">:</span>
          </p>
          <p className="text-[#646464] text-sm font-medium">2500 Follower</p>
        </div>
        <div className="w-full grid gap-x-4 grid-cols-[2fr__1fr]">
          <p className="flex justify-between items-center text-[#A1A4A8] text-sm">
            Quomeda Nominations <span className="#646464 font-bold">:</span>
          </p>
          <p className="text-[#646464] text-sm font-medium">564 Followers</p>
        </div>
        <div className="w-full grid gap-x-4 grid-cols-[2fr__1fr]">
          <p className="flex justify-between items-center text-[#A1A4A8] text-sm">
            Twitter <span className="#646464 font-bold">:</span>
          </p>
          <p className="text-[#646464] text-sm font-medium">False</p>
        </div>
        <div className="w-full grid gap-x-4 grid-cols-[2fr__1fr]">
          <p className="flex justify-between items-center text-[#A1A4A8] text-sm">
            Publications <span className="#646464 font-bold">:</span>
          </p>
          <p className="text-[#646464] text-sm font-medium">36</p>
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
