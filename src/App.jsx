import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testing from "./components/Testing";
const App = () => {
  return (
    <div className="max-w-[1445px] mx-auto">
      <Navbar />
      <Hero />
      {/* <Testing /> */}
    </div>
  );
};
export default App;
