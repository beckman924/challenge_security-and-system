import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Header from "@/components/Header/Header";
import Interests from "@/components/Interests/Interests";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Interests />
        <Contact />
      </main>
    </>
  );
}
