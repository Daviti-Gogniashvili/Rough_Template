import "./App.css";
import ContactBanner from "./Components/Contact Banner/contact-banner";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main";
import NavBar from "./Components/Nav-Bar/Nav-Bar";

function App() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Main/>
      <ContactBanner/>
      <Footer/>
    </div>
  );
}

export default App;
