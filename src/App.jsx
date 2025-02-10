import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div className="bg-[#D9D9D9]  max-w-[1445px] mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
};
export default App;
