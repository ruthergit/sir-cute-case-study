import Navbar from "../components/Navbar"

const ThirdPage = () => {
  return (
    <div className="h-screen font-nunitoSans">
      <Navbar/>
      <div className="inline-flex flex-1 pl-0  ml-68 mx-auto px-6 gap-8 mt-45 flex-row items-center justify-center w-7xl h-141 bg-green-700 rounded-lg">
        <img 
          src="img/img2.png" 
          alt="Description" 
          className="max-w-full  w-full rounded-lg shadow-lg"
        />
        <div className="text-center">
          <p className=" mb-4 text-white" >
           <h1 className="text-2xl">Appilcation are Open</h1>
           <p>Student Placement Admission to College</p>
           <p>Start your journey at University of Cabuyao! Wheter you're applying for college,
            begin the admission process today. Take the first step toward a bright future-your success story starts here!
           </p>
           <h2></h2>
          </p>
          <button className="border hover:bg-white hover:text-green-700 text-white font-semibold py-2 px-6 rounded-4xl transition duration-300">
            Start your PNC Journey
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThirdPage