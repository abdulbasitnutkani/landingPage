import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
const App = () => {
  return (
    <div className="max-w-[1445px] mx-auto">
      <Navbar />
      <Hero />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
        voluptatibus tempora ab in neque itaque magni officia fuga, quas eaque
        numquam nesciunt. Culpa similique praesentium placeat laudantium nobis
        quas nisi.
      </p>
      <Testimonial />
    </div>
  );
};
export default App;
