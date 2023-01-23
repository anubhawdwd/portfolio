import Head from "next/head";
import AboutMe from "./AboutMe";
import { UseGlobalContext } from "../data/contextAPI/GlobalState";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Home() {
  const { darkMode } = UseGlobalContext();
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Anubhaw Dwivedi</title>
          <meta
            name="description"
            content="Front-End Developer with 2 years of professional experience in building responsive web designs and interactive interfaces. Proficient with React JS, Javascript and CSS for creating Single Page Applications"
          />
          <link rel="icon" href="/anubhaw-192x192.png" />
      
        </Head>
        <main className=" bg-yellow-100 dark:bg-black">
          <section className="min-h-screen">
            <Navbar />
            <section id="AboutMe">
              <AboutMe />
            </section>
            <section id="Skills">
              <Skills />
            </section>
            <section id="Projects">
              <Projects />
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
