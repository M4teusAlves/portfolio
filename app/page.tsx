'use client'
import { Cursor } from "./components/cursor";
import { Header } from "./components/header";
import { Social } from "./components/social";
import { Email } from "./components/email";
import { Main } from "./components/main";
import { Experience } from "./components/expience";
import { useState } from "react";
import { PopUp } from "./components/popup";
import { Projects } from './components/projects';
import { Skills } from "./components/skills";
import { Footer } from "./components/footer";

export default function Home() {

  const [activePopUp, setactivePopUp] = useState(false)

  return (
    <main className="w-full flex flex-col items-center">
      <Header/>
      <Cursor/>
      <Social/>
      <PopUp
        show={activePopUp}
      />
      <Email onShow={ ()=>{setactivePopUp(!activePopUp)} }/>
      <Main/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
    </main>
  );
}
