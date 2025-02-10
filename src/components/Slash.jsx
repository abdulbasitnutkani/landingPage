import s1 from "../assets/s1.png";
const Slash = () => {
  return (
    <div
      className=" h-min-screen  bg-cover bg-center mt-5 bg-[#D9D9D9]"
      style={{ backgroundImage: `url(${s1})` }}
    >
      <h1 className=" ml-5 mt-5 text-left text-[48px] leading-[60px] font-bold text-[#FFFFFF]">
        <span className="block">Slash</span>
        <span className="block">your</span>
        <span className="block">testing</span>
        <span className="block">costs</span>
        <span className="block">by 80%</span>
      </h1>

      <p className="w-[302px] px-5 ml-5 my-12 text-left text-[#FFFFFF] font-bold text-[20px] leading-[30px]">
        Hire On-demand QA Automation Engineers at a fraction of the cost!
        <span className="block mt-4 font-medium">
          Cut through inefficiencies, reduce your costs, and ensure your app
          works perfectly every time.
        </span>
      </p>
    </div>
  );
};
export default Slash;
