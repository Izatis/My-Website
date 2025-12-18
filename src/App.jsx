import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import LogoShowcase from "./sections/LogoShowcase";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleCopy = (e) => {
      e.preventDefault();
      e.clipboardData?.setData("text/plain", "Copying disabled.");
    };
  
    document.addEventListener("copy", handleCopy);
  
    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, []);
  return (
    <>
      <NavBar />
      <Hero />
      <section id="essay" className="essay-section"> 
      <h1 className="essay-title">The Turning Point of Self-Learning</h1>
      <div className="essay-left-accent">

      <p className="essay-paragraph no-copy ">
        My future was not shaped by a classroom or a teacher, but by a quiet
        moment of independent work that changed the direction of my life. That
        moment when I first chose to teach myself opened doors I never imagined.
        Through self-study, I eventually learned programming, built enough
        English skills to study abroad, and developed habits that shaped my
        identity as a thinker, a student, and now a CSUN undergraduate. Looking
        back, that turning point did more than give me knowledge. It reshaped
        who I believed I could become.
      </p>
      <Experience />
      <p className="essay-paragraph no-copy ">
        Reflecting now, I see that self-study did more than teach me programming
        or English. It shaped my worldview. I learned that progress depends not
        on where you start, but on how you respond when you feel lost. It taught
        me patience, discipline, curiosity, and the belief that I can always
        grow beyond my limits. Self-learning became my personal “literacy” , the
        language through which I understand the world, make decisions, and build
        my future.
      </p>
      <p className="essay-paragraph no-copy ">
        Everything traces back to that moment in Kyrgyzstan when I clicked Play
        on a simple YouTube video. I didn’t know it then, but that small action
        changed the direction of my life. It revealed the kind of person I
        wanted to become someone who doesn’t wait for opportunity but creates
        it. And today, as I continue my journey at CSUN, I follow that path with
        the same determination, step by step, just as I began.
      </p>
      </div>
      </section>
      <TechStack />
      <LogoShowcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
