import Navbar from "../components/Navbar";

const ThirdPage = () => {
  return (
    <div className="h-[70vh] font-nunitoSans bg-[#198754] flex items-center justify-center p-4">
      <div className="flex flex-col md:flex-row items-center justify-center bg-[#198754] rounded-lg shadow-lg w-full max-w-7xl p-6 gap-6">
        
        {/* Image - hidden on small screens */}
        <img 
          src="img/img2.png" 
          alt="Description" 
          className="hidden md:block md:w-1/2 rounded-lg shadow-lg"
        />

        {/* Text Content */}
        <div className="text-white text-center md:text-left space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold">Applications are Open</h1>
          <p className="text-sm md:text-base">Student Placement Admission to College</p>
          <p className="text-sm md:text-base">
            Start your journey at the University of Cabuyao! Whether you're applying for college,
            begin the admission process today. Take the first step toward a bright future — your success story starts here!
          </p>
          <button className="mt-4 border border-white hover:bg-white hover:text-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Start your PNC Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
