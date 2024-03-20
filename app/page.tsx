'use client'
import { Cursor } from "./components/cursor";
import { Header } from "./components/header";
import { Social } from "./components/social";
import { Email } from "./components/email";
import { Main } from "./components/main";
import { Experience } from "./components/expience";
import { useState } from "react";
import { PopUp } from "./components/popup";
import { Project } from "./components/project";
import { Projects } from "./components/projects";

export default function Home() {

  const [activePopUp, setactivePopUp] = useState(false)

  return (
    <main className="w-full">
      <Header/>
      <Cursor/>
      <Social/>
      <PopUp
        show={activePopUp}
        onShow={()=>{setactivePopUp(false)}}
      />
      <Email onShow={ ()=>{setactivePopUp(true)} }/>
      <Main/>
      <Experience/>
      <Projects/>
    </main>
  );
}
