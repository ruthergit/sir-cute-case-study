import Navbar from "../components/Navbar"

const FourthPage = () => {
    return (
        <div className="h-screen font-nunitoSans">
            <Navbar/>
            
            {/* Header and View All News section */}
            <div className="flex justify-between items-center px-8 pb-4 mt-45" >
                <h1 className="text-3xl font-bold text-green-700">University News and Events</h1>
                <button className="bg-green-700 text-white px-6 py-2 rounded-2xl  transition-colors ">
                    View All News
                </button>
            </div>

            {/* Images and Text Grid */}
            <div className="grid grid-cols-3 gap-8 px-8">
                {/* First News Item */}
                <div className="flex flex-col gap-4" >
                    <img 
                        src="img/img3.png" 
                        alt="News 1" 
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-green-700">Events</h3>
                    <p className="text-gray-600">
                        PNC English Era hosted a public speaking workshop
                    </p>
                </div>

                {/* Second News Item */}
                <div className="flex flex-col gap-4">
                    <img 
                        src="img/img4.png" 
                        alt="News 2" 
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-green-700">News</h3>
                    <p className="text-gray-600">
                        Online Synchronous Classes and Work Arragenment 
                    </p>
                </div>

                {/* Third News Item */}
                <div className="flex flex-col gap-4">
                    <img 
                        src="img/img5.png" 
                        alt="News 3" 
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <h3 className="text-xl font-semibold text-green-700">Events</h3>
                    <p className="text-gray-600">
                        Disaster Nursing Training Seminar
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FourthPage;