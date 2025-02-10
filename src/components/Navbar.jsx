import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-auto px-4 md:px-14">
      <img src={logo} alt="" className="mt-5" />
      <div className="flex gap-2 mt-5">
        <button
          type="submit"
          className=" hidden md:block px-5 py-2  cursor-pointer border-1 rounded-lg border-[#5B5AF7] text-[#5B5AF7]"
        >
          See Pricing
        </button>
        <button
          type="submit"
          className=" px-5 py-2 cursor-pointer  rounded-lg text-white bg-[#5B5AF7]   pr-4 pl-4 text-[#5B5AF7]"
        >
          Book A Call
        </button>
      </div>
    </div>
  );
};
export default Navbar;
