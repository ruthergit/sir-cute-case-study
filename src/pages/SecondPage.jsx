import Navbar from "../components/Navbar";
import Button from "../components/GreenBtn";

const SecondPage = () => {
    return(
    <div className="h-screen">
        <Navbar/>
       
        <div className="grid h-full place-self-center text-center">
          <img className="w-[540px]" src="/pride-of-cabuyao.png" alt="" />
          <div className="flex justify-between items-start mb-32">
            <div className="text-left w-1/4 ml-90 mt-25">
                <h2 className="mb-2 font-semibold text-5xl">
                    <span className="text-green-700">FUTURE-</span>READY LEADING
                </h2>
                <p className="mb-1 text-2xl">University of Cabuyao is committed to transformative education, preparing students
                     for a dynamic future. We cultivate innovative thinkers, skilled problem solvers, and ethical leaders through a
                      blend of academic excellence and practical 
                    skills. Our core values of integrity, excellence, and social responsibility ensure that
                     graduates are well-equipped to make a positive impact in their careers and communities.
                </p>
                <div className="flex space-x-2 text-sm w-[24vw] mt-5">
                    <Button text="Educational Philosophy" className="bg-green-500 text-white border border-green-500" />
                    <Button text="Homes" className="text-green-500 border border-green-500 bg-transparent" />
                </div>
            </div>
            <img src="img/img1.png" alt="" className="w-[700px] mr-70 mt-10" />
          </div>
        </div>
        
    </div>
    );
}

export default SecondPage;