import s1 from "../assets/s1.png";
import vector from "../assets/vector.png";

const Slash = () => {
  return (
    <div
      className="relative h-auto bg-cover bg-center mt-5 bg-[#D9D9D9]"
      style={{ backgroundImage: `url(${s1})` }}
    >
      {/* Vector Image Positioned on the Right Half & Blended */}
      <img
        src={vector}
        alt="Vector Overlay"
        className="absolute top-0 right-0 h-full w-1/2 object-cover opacity-80 mix-blend-overlay"
      />
      <h1 className="ml-10 mt-8 text-left text-[48px] leading-[60px] font-bold text-[#FFFFFF] relative z-10">
        <span className="block">Slash</span>
        <span className="block">your</span>
        <span className="block">testing</span>
        <span className="block">costs</span>
        <span className="block">by 80%</span>
      </h1>

      <p className="w-[302px] px-5 ml-5 my-12 text-left text-[#FFFFFF] font-bold text-[20px] leading-[30px] relative z-10">
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
