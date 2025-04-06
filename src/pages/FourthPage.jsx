import Navbar from "../components/Navbar";

const FourthPage = () => {
    return (
        <div className="min-h-screen font-nunitoSans px-4 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-green-700">University News and Events</h1>
                <button className="bg-[#198754] text-white px-6 py-2 rounded-2xl transition-colors hover:bg-green-800">
                    View All News
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <div className="flex flex-col gap-4">
                    <img 
                        src="img/img3.png" 
                        alt="News 1" 
                        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-green-700">Events</h3>
                    <p className="text-gray-600">
                        PNC English Era hosted a public speaking workshop
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <img 
                        src="img/img4.png" 
                        alt="News 2" 
                        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-green-700">News</h3>
                    <p className="text-gray-600">
                        Online Synchronous Classes and Work Arrangement
                    </p>
                </div>

                <div className="flex flex-col gap-4">
                    <img 
                        src="img/img5.png" 
                        alt="News 3" 
                        className="w-full h-60 sm:h-72 md:h-80 object-cover rounded-lg"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-green-700">Events</h3>
                    <p className="text-gray-600">
                        Disaster Nursing Training Seminar
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FourthPage;
