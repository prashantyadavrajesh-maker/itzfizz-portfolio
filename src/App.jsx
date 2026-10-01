import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* 01 - Home */}
        <Hero />

        {/* 02 - Stack */}
        <Services />

        {/* 03 - Work */}
        <Work />

        {/* 04 - About */}
        <About />

        {/* 05 - Contact */}
        <Contact />
      </main>
    </>
  );
}

export default App;