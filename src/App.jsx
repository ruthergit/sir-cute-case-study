import Hero from ".//pages/Hero";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import FourthPage from "./pages/FourthPage";
import Footer from "./pages/Footer";
import MainLayout from "./layouts/MainLayout";


const App = () => {
  return (<>
    <MainLayout/>
    <Hero/>
    <SecondPage/>
    <ThirdPage/>
    <FourthPage/>
    <Footer/>
  </>
  );
};

export default App;
