import hero from "../assets/hero.png";
import h1 from "../assets/h1.png";
import h2 from "../assets/h2.png";
import h3 from "../assets/h3.png";
import h4 from "../assets/h4.png";
import h5 from "../assets/h5.png";
import h6 from "../assets/h6.png";
import h7 from "../assets/h7.png";
import bg2 from "../assets/bg2.png";
import verified from "../assets/verified.png";
import Slash from "./Slash";
const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="max-w-[332px] md:max-w-[1304px] w-full flex flex-col items-center justify-center mx-auto">
        <h1 className="text-[36px] leading-[39px] font-[700px] text-[#333333] md:text-[64px] text-center md:leading-[78px] md:font-[800px] pt-10">
          Reliable, Affordable Testing for Your Startup’s Growth
        </h1>
        <p className="text-[#3E3E3E] w-full text-center mt-4 font-semibold">
          Get Expert testers on demand. Pause or cancel anytime.
        </p>
      </div>
      {/* Background Section */}
      <div
        className="relative hidden md:flex md:flex-row  mx-auto w-auto  md:w-full md:h-[1245px] bg-cover bg-center bg-no-repeat rounded-md -mt-36"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="flex flex-wrap md:w-1/2 w-full">
          {/* Card 1 section */}
          <div className="flex flex-col  md:w-[195px] md:ml-8  md:mt-56 bg-white shadow-lg rounded-lg overflow-hidden max-h-[240px] md:max-h-[270px]">
            <img src={h1} alt="Mei Lin" className="w-full h-auto" />
            <div className="p-2 md:p-3">
              <h1 className="text-[12px] md:text-[14px] font-bold text-[#2C2C2C]">
                Mei Lin
              </h1>
              <p className="text-[10px] md:text-[12px] text-[#737373] font-medium">
                QA Automation Specialist
              </p>
              <div className="flex gap-1 text-[#5B5AF7] text-[8px] md:text-[10px] mt-1">
                <img
                  src={verified}
                  alt="Verified"
                  className="w-2.5 md:w-3 h-2.5 md:h-3"
                />
                <p className="text-[5px] md:text-[6px]">
                  Verified Expert in Selenium and Automated Testing Frameworks
                </p>
              </div>

              <p className="text-[#737373] text-[7px] md:text-[8px] font-semibold mt-3">
                ZenWave Systems
              </p>
            </div>
          </div>
          {/* Card 2 section */}
          <div className="flex flex-col w-[195px] ml-8 mt-86 bg-white shadow-lg rounded-lg overflow-hidden max-h-[270px]">
            <img src={h2} alt="Nguyen Tran" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Nguyen Tran
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                QA Automation Engineer
              </p>

              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in End-to-End Testing and Automated Frameworks
                </p>
              </div>

              <p className="text-[#737373] text-[8px] font-semibold mt-3">
                BrightCode Systems
              </p>
            </div>
          </div>
          {/* Card 3 section */}
          <div className="flex flex-col w-[195px] ml-8 mt-76 bg-white shadow-lg rounded-lg overflow-hidden max-h-[270px]">
            <img src={h3} alt="Emma Johnson" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Emma Johnson
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                Senior QA Engineer
              </p>

              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Functional Testing and Regression Suites
                </p>
              </div>

              <p className="text-[#737373] text-[8px] font-semibold mt-3">
                ApexSoft Solutions
              </p>
            </div>
          </div>
          {/* Card 4 section */}
          <div className="flex flex-col w-[220px]  -mt-28 bg-white shadow-lg rounded-lg rounded-l-none overflow-hidden max-h-[300px]">
            <img src={h4} alt="Ahmad Faizal" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Ahmad Faizal
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                QA Analyst
              </p>

              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Manual Testing and API Validation{" "}
                </p>
              </div>

              <p className="text-[#737373] text-[8px] font-semibold mt-3">
                FlowBridge Labs
              </p>
            </div>
          </div>
          {/* Card 5 section */}
          <div className="flex flex-col w-[170px] ml-8  mt-8 bg-white shadow-lg rounded-lg max-h-[225px]  overflow-hidden">
            <img src={h5} alt="Daniel White" className="w-full h-32" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Daniel White
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                Team Lead
              </p>

              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Test Planning and Defect Logging{" "}
                </p>
              </div>

              <p className="text-[#737373] text-[8px] font-semibold mt-1">
                ZenWave Systems
              </p>
            </div>
          </div>
          {/* Card 6 section */}
          <div className="flex flex-col w-[220px] ml-6  mt-4 bg-white shadow-lg rounded-lg  overflow-hidden max-h-[300px]">
            <img src={h7} alt="Rohit Sharma" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Rohit Sharma
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                Principal QA Engineer
              </p>

              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Performance Testing and Requirements
                  Validation
                </p>
              </div>
              <p className="text-[#737373] text-[8px] font-semibold mt-3">
                CodeClimb Innovations
              </p>
            </div>
          </div>

          {/* Card 7 section */}
          <div className="flex flex-col w-[170px] md:ml-6  md:-mt-44 bg-white shadow-lg rounded-lg max-h-[225px]  overflow-hidden">
            <img src={h6} alt="Sophia Miller" className="w-full h-32" />
            <div className="p-3">
              <h1 className="text-[14px] font-bold text-[#2C2C2C]">
                Sophia Miller
              </h1>
              <p className="text-[12px] text-[#737373] font-medium">
                Lead QA Analyst
              </p>
              <div className="flex  gap-1 text-[#5B5AF7] text-[10px] mt-1">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in API Testing and Test Case Writing
                </p>
              </div>
              <p className="text-[#737373] text-[8px] font-semibold mt-1">
                BrightPath Tech
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 md:w-1/2 w-full items-center">
          {/* First Card */}
          <div className="w-[501px] h-[271px] rounded-[18px] bg-[#FFFFFF] mt-[400px] flex flex-col items-center justify-center p-5 ml-[120px]">
            <h1
              className="text-[28px] font-bold self-start"
              style={{
                background:
                  "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.99%, #5B5AF7 99.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              UNLIMITED TESTING
            </h1>
            <div className="flex items-center gap-2 my-2 self-start">
              <h1 className="text-[#333333B2] text-[32px] font-bold">$900</h1>
              <h1 className="text-[#2C2C2C] text-[40px] font-bold">
                $499
                <span className="text-[22px] font-normal"> / per month</span>
              </h1>
            </div>
            <p className="text-[#737373] text-[12px] text-center">
              Unlimited Testing provides consistent, high-quality testing for
              teams that need ongoing support. Best for teams with regular
              testing needs.
            </p>

            <button
              type="submit"
              className="bg-[#5B5AF7] text-white rounded-md px-[24px] py-[8px] w-[80%] mt-4 cursor-pointer"
            >
              Start
            </button>
          </div>

          {/* Second Card */}
          <div className="w-[501px] h-[271px] rounded-[18px] bg-[#FFFFFF]  flex flex-col p-5 ml-[120px]">
            <h1
              className="text-[28px] font-bold self-start"
              style={{
                background:
                  "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.99%, #5B5AF7 99.96%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ADHOC
            </h1>

            <div className="flex items-center gap-2 my-2 self-start">
              <h1 className="text-[#333333B2] text-[32px] font-bold">$14</h1>
              <h1 className="text-[#2C2C2C] text-[40px] font-bold">
                $9
                <span className="text-[22px] font-normal"> / hour</span>
              </h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[#737373] text-[12px] text-center">
                Adhoc Testing is flexible, on-demand testing for occasional
                projects. Perfect for businesses with sporadic testing needs.
              </p>

              <button
                type="submit"
                className="bg-[#5B5AF7] text-white rounded-md px-[24px] py-[8px] w-[80%] mt-4 cursor-pointer"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile screeen Background section */}
      <div
        className="relative  md:hidden flex flex-col h-[400px] w-full  mx-auto    bg-cover bg-center bg-no-repeat rounded-md "
        style={{ backgroundImage: `url(${bg2})` }}
      >
        <div
          className="flex flex-row bg-[#D9D9D9];
"
        >
          {/* Card 1 section */}
          <div className="flex flex-col  w-[160px] ml-3 bg-white shadow-lg rounded-lg overflow-hidden max-h-[170px] ">
            <img src={h1} alt="Mei Lin" className="w-full h-auto" />
            <div className="p-2 md:p-3">
              <h1 className="text-[10px]  font-medium text-[#2C2C2C]">
                Mei Lin
              </h1>
              <p className="text-[8px]  text-[#737373] font-medium">
                QA Automation Specialist
              </p>
              <div className="flex gap-1 text-[#5B5AF7] text-[8px]  mt-0.5">
                <img
                  src={verified}
                  alt="Verified"
                  className="w-2.5 md:w-3 h-2.5"
                />
                <p className="text-[5px] ">
                  Verified Expert in Selenium and Automated Testing Frameworks
                </p>
              </div>

              <p className="text-[#737373] text-[7px]  font-semibold mt-0.5">
                ZenWave Systems
              </p>
            </div>
          </div>
          {/* Card 2 section */}
          <div className="flex flex-col mt-24 w-[160px] ml-3 bg-white shadow-lg rounded-lg overflow-hidden max-h-[170px] ">
            <img src={h2} alt="Nguyen Tran" className="w-full h-auto" />
            <div className="p-2 md:p-3">
              <h1 className="text-[10px]  font-medium text-[#2C2C2C]">
                Nguyen Tran
              </h1>
              <p className="text-[8px]  text-[#737373] ">
                QA Automation Engineer
              </p>
              <div className="flex gap-1 text-[#5B5AF7] text-[8px]  mt-0.5">
                <img
                  src={verified}
                  alt="Verified"
                  className="w-2.5 md:w-3 h-2.5"
                />
                <p className="text-[5px]">
                  Verified Expert in End-to-End Testing and Automated Frameworks
                </p>
              </div>

              <p className="text-[#737373] text-[7px]   mt-0.5">
                BrightCode Systems
              </p>
            </div>
          </div>
          {/* Card 3 section */}
          <div className="flex flex-col w-[195px] ml-8 mt-18 bg-white shadow-lg rounded-lg rounded-r-none overflow-hidden max-h-[220px]">
            <img src={h3} alt="Emma Johnson" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[10px] font-medium text-[#2C2C2C]">
                Emma Johnson
              </h1>
              <p className="text-[10px] text-[#737373]">Senior QA Engineer</p>

              <div className="flex  text-[#5B5AF7] text-[10px] mt-0.5">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Functional Testing and Regression Suites
                </p>
              </div>

              <p className="text-[#737373] text-[8px]  mt-0.5">
                ApexSoft Solutions
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-[#D9D9D9]">
          {/* Card 4 section */}
          <div className="flex flex-col w-[118px] -mt-24   bg-white shadow-lg rounded-lg rounded-l-none overflow-hidden max-h-[178px]">
            <img src={h4} alt="Ahmad Faizal" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[10px] font-medium text-[#2C2C2C]">
                Ahmad Faizal
              </h1>
              <p className="text-[8px] text-[#737373] ">QA Analyst</p>

              <div className="flex   text-[#5B5AF7] text-[10px] mt-0.5">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Manual Testing and API Validation{" "}
                </p>
              </div>

              <p className="text-[#737373] text-[8px]  mt-0.5">
                FlowBridge Labs
              </p>
            </div>
          </div>
          {/* Card 5 section */}
          <div className="flex flex-col w-[110px] ml-5 mt-1 bg-white shadow-lg rounded-lg max-h-[164px]  overflow-hidden">
            <img src={h5} alt="Daniel White" className="w-full h-32" />
            <div className="p-3">
              <h1 className="text-[8px] font-medium text-[#2C2C2C]">
                Daniel White
              </h1>
              <p className="text-[8px] text-[#737373] ">Team Lead</p>

              <div className="flex text-[#5B5AF7] text-[10px] mt-0.5">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[5px]">
                  Verified Expert in Test Planning and Defect Logging
                </p>
              </div>

              <p className="text-[#737373] text-[6px] mt-0.5">
                ZenWave Systems
              </p>
            </div>
          </div>
          {/* Card 6 section */}
          <div className="flex flex-col w-[134px] ml-6   mt-4 bg-white shadow-lg rounded-lg  overflow-hidden max-h-[196px]">
            <img src={h7} alt="Rohit Sharma" className="w-full h-auto" />
            <div className="p-3">
              <h1 className="text-[10px] font-medium text-[#2C2C2C]">
                Rohit Sharma
              </h1>
              <p className="text-[8px] text-[#737373]">Principal QA Engineer</p>

              <div className="flex text-[#5B5AF7] text-[10px] mt-0.5">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[6px]">
                  Verified Expert in Performance Testing and Requirements
                  Validation
                </p>
              </div>
              <p className="text-[#737373] text-[8px] font-semibold mt-0.5">
                CodeClimb Innovations
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row bg-[#D9D9D9]">
          {/* Card 7 section */}
          <div className="flex flex-col w-[120px] ml-2 -mt-12  bg-white shadow-lg rounded-lg max-h-[180px]  overflow-hidden">
            <img src={h6} alt="Sophia Miller" className="w-full h-32" />
            <div className="p-3">
              <h1 className="text-[10px] font-medium text-[#2C2C2C]">
                Sophia Miller
              </h1>
              <p className="text-[10px] text-[#737373]">Lead QA Analyst</p>
              <div className="flex  text-[#5B5AF7] text-[10px] mt-0.5">
                <img src={verified} alt="Verified" className="w-3 h-3" />
                <p className="text-[5px]">
                  Verified Expert in API Testing and Test Case Writing
                </p>
              </div>
              <p className="text-[#737373] text-[8px] mt-0.5">
                BrightPath Tech
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-3  bg-[#D9D9D9]">
          <div className="flex flex-col gap-2 w-[90%] max-w-[425px]">
            {/* First Card */}
            <div className="rounded-[18px] bg-white flex flex-col items-center justify-center p-5 shadow-lg">
              <h1
                className="text-[22px] md:text-[28px] font-bold self-start"
                style={{
                  background:
                    "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.99%, #5B5AF7 99.96%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                UNLIMITED TESTING
              </h1>
              <div className="flex items-center gap-2 my-2 self-start">
                <h1 className="text-[#333333B2] text-[24px] md:text-[32px] font-bold">
                  $900
                </h1>
                <h1 className="text-[#2C2C2C] text-[30px] md:text-[40px] font-bold">
                  $499
                  <span className="text-[16px] md:text-[22px] font-normal">
                    {" "}
                    / per month
                  </span>
                </h1>
              </div>
              <p className="text-[#737373] text-[10px] md:text-[12px] text-center">
                Unlimited Testing provides consistent, high-quality testing for
                teams that need ongoing support.
              </p>
              <button className="bg-[#5B5AF7] text-white rounded-md px-[20px] py-[6px] w-[90%] md:w-[80%] mt-4 cursor-pointer">
                Start
              </button>
            </div>

            {/* Second Card */}
            <div className="rounded-[18px] bg-white flex flex-col p-5 shadow-lg">
              <h1
                className="text-[22px] md:text-[28px] font-bold self-start"
                style={{
                  background:
                    "linear-gradient(89.96deg, #F1B2A8 -22%, #EC57A8 35.99%, #5B5AF7 99.96%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                ADHOC
              </h1>
              <div className="flex items-center gap-2 my-2 self-start">
                <h1 className="text-[#333333B2] text-[24px] md:text-[32px] font-bold">
                  $14
                </h1>
                <h1 className="text-[#2C2C2C] text-[30px] md:text-[40px] font-bold">
                  $9
                  <span className="text-[16px] md:text-[22px] font-normal">
                    {" "}
                    / hour
                  </span>
                </h1>
              </div>
              <p className="text-[#737373] text-[10px] md:text-[12px] text-center">
                Adhoc Testing is flexible, on-demand testing for occasional
                projects.
              </p>
              <button className="bg-[#5B5AF7] text-white rounded-md px-[20px] py-[6px] w-[90%] md:w-[80%] mt-4 cursor-pointer">
                Start
              </button>
            </div>
          </div>
        </div>
        <Slash />
      </div>
    </div>
  );
};
export default Hero;
