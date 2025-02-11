import bg2 from "../assets/bg2.png";
const Testing = () => {
  return (
    <>
      <div className=" py-16 flex flex-col">
        <div
          className="w-[58px] h-[9px] flex justify-center mx-auto items-center
       bg-[#EC57A8] rounded-[28px]"
        ></div>

        <h1 className="text-center mt-10 text-[24px] font-semibold">
          QA Testing as a <br /> Subscription Service
        </h1>
      </div>
      <div className="relative w-full h-[380px] mt-24">
        <img
          src={bg2}
          alt=""
          className="absolute inset-0 w-full bg-center h-full"
        />
        <div className="relative flex justify-center items-center h-full">
          <div className="w-[355px] h-auto rounded-[12px] border border-solid border-gray-200 bg-white p-6 flex flex-col gap-4">
            <h1
              className="text-[28px] font-bold"
              style={{
                background:
                  "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.99%, #5B5AF7 99.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              UNLIMITED
            </h1>
            <div className="flex items-center gap-2">
              <h1 className="text-[#333333B2] text-[22px] font-medium">$900</h1>
              <h1 className="text-[#2C2C2C] text-[26px] font-semibold">
                $499
                <span className="text-[18px] font-normal"> / per month</span>
              </h1>
            </div>

            <h3 className="text-[#5B5AF7] text-12 font-bold">
              PAUSE OR CANCEL ANYTIME
            </h3>
            <p
              className="text-[#737373
] text-[14px] font-medium"
            >
              Unlimited Testing provides consistent, high-quality testing for
              teams that need ongoing support. Best for teams with regular
              testing needs.
            </p>
            <div className=" text-[#737373] w-[307px] h-[70px] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Supports up to 4 developers with 24-hour turnaround.
            </div>
            <div className="w-[307px] h-[70px] text-[#737373] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Unlimited projects and team access.
            </div>
            <div className="w-[307px] h-[70px] text-[#737373] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Includes automated and manual testing.
            </div>

            <button className="w-full px-10 py-3 rounded-md bg-[#5B5AF7] text-white mt-auto">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
      <div className="relative w-full h-[350px] mt-68">
        <img
          src={bg2}
          alt=""
          className="absolute inset-0 w-full bg-center  h-full"
        />
        <div className="relative flex justify-center items-center h-full">
          <div className="w-[355px] h-auto rounded-[12px] border border-solid border-gray-200 bg-[#150E24] p-6 flex flex-col gap-4">
            <h1
              className="text-[28px] font-bold"
              style={{
                background:
                  "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.93%, #5B5AF7 99.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ADHOC
            </h1>

            <div className="flex items-center text-[#FFFFFFB2] gap-2">
              <h1 className=" text-[22px] font-medium">$14</h1>
              <h1 className=" text-[26px] font-semibold">
                $49
                <span className="text-[18px] font-normal"> / per month</span>
              </h1>
            </div>
            <h3 className="text-[#5B5AF7] text-12 font-bold">
              PAUSE OR CANCEL ANYTIME
            </h3>

            <p className="text-[#BBBBBB] text-[14px] font-medium">
              Adhoc Testing is flexible, on-demand testing for occasional
              projects. Perfect for businesses with sporadic testing needs.
            </p>
            <div className="w-[307px] text-[#BBBBBB] h-[70px] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Serves up to 4 developers with 48-hour delivery.
            </div>
            <div className="w-[307px] text-[#BBBBBB] h-[70px] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Automated and manual testing included.
            </div>
            <div className="w-[307px] text-[#BBBBBB] h-[70px] text-[14px] font-[600px] bg-[#A9A9F824] flex items-center text-center justify-center rounded-sm py-4 ">
              Pay-as-you-go model for cost flexibility.
            </div>

            <button className="w-full px-10 py-3 rounded-md bg-[#5B5AF7] text-white mt-auto">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testing;
