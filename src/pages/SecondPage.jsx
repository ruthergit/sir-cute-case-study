import Navbar from "../components/Navbar";
import Button from "../components/GreenBtn";

const SecondPage = () => {
  return (
    <div className="h-[75vh] pt-20 font-nunitoSans px-4 md:px-8">    
      <div className="grid place-items-center text-center h-full">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-16 w-full max-w-7xl">
          <div className="text-left w-full lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="mb-4 font-semibold text-3xl sm:text-4xl lg:text-5xl">
              <span className="text-green-700">FUTURE-</span>READY LEADING
            </h2>
            <p className="mb-4 text-base sm:text-lg lg:text-2xl">
              University of Cabuyao is committed to transformative education, preparing students
              for a dynamic future. We cultivate innovative thinkers, skilled problem solvers, and ethical leaders through a
              blend of academic excellence and practical skills. Our core values of integrity, excellence, and social responsibility ensure that
              graduates are well-equipped to make a positive impact in their careers and communities.
            </p>
            <div className="flex flex-wrap gap-3 text-sm mt-4">
              <Button text="Educational Philosophy" className="bg-green-500 text-white border border-green-500" />
              <Button text="Homes" className="text-green-500 border border-green-500 bg-transparent" />
            </div>
          </div>

          <img 
            src="img/img1.png" 
            alt="Future Ready" 
            className="hidden lg:block w-full max-w-[700px] lg:mr-10 lg:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
