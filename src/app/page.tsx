import Image from "next/image";
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marquee from "./components/Marquee";
import About from "./components/About"
import Eye from "./components/Eye";

function App() {
  return (

    <div className=" w-full h-screen text-white bg-zinc-900">
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eye/>
    </div>


  );


}

export default App;




