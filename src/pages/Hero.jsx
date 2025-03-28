import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Button from "../components/YellowBtn";

const Hero = () => {
  return (
    <div className="">
      <Header />
      <Navbar />
      <div className="h-[79vh] relative font-nunitoSans text-white">
        <img
          className="w-full h-full object-cover absolute -z-10"
          src="/pnc-building-1.png"
          alt=""
        />
        <div className="grid pt-56 place-self-center text-center">
          <img className="w-[540px]" src="/pride-of-cabuyao.png" alt="" />
          <p>Laguna, Philippines</p>
        </div>
      </div>
      <div className="h-[8vh] bg-[#198754] px-72 py-2.5 flex content-center justify-between">
        <Button text="Academic Programs"/>
        <Button text="Student Services"/>
        <Button text="Online Resources"/>
        <Button text="Events"/>
      </div>
    </div>
  );
};

export default Hero;
