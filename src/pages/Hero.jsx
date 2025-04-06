import Header from "../components/Header";
import Navbar from "../components/NavbarTwo";
import Button from "../components/YellowBtn";

const Hero = () => {
  return (
    <div>
      <div className="h-screen md:h-[92vh] relative font-nunitoSans text-white">
        <Header />
        <Navbar />
        <img
          className="w-full h-full md:h-[84vh] object-cover absolute -z-10"
          src="/pnc-building-1.png"
          alt=""
        />
        <div className="grid place-items-center text-center pt-40 md:pt-56 px-4">
          <img
            className="w-72 md:w-[540px]"
            src="/pride-of-cabuyao.png"
            alt=""
          />
          <p className="text-sm md:text-base">Laguna, Philippines</p>
        </div>
      </div>

      <div className="h-auto md:h-[10vh] bg-[#198754] px-6 py-8 md:px-72 grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-between md:items-center">
        <Button text="Academic Programs" />
        <Button text="Student Services" />
        <Button text="Online Resources" />
        <Button text="Events" />
      </div>
    </div>
  );
};

export default Hero;
