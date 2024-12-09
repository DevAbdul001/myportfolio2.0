import Nav from "./Sections/Nav"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Skills from "./Sections/Skills"
import Projects from "./Sections/Projects"
import Reviews from "./Sections/Reviews"
import Contacts from "./Sections/Contacts"
import Footer from "./Sections/Footer"
import { FormspreeProvider } from "@formspree/react"

function App() {
 

  return (
    <FormspreeProvider project="xrbgvqwb">
       <main className=" w-full"> 
   <section className="xl:padding-1 wide:padding-r padding-b ">
    <Nav/>
   </section>

   <section className="padding">
    <Hero/>
    
   </section>

    <section className="padding">
      <About/>
    </section>

    <section className="padding">
     <Skills/>
    </section>

    <section className="padding">
      <Projects/>
    </section>

    <section className="padding">
      <Reviews/>
    </section>

    <section className="padding">
      <Contacts/>
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
    </main>
    </FormspreeProvider>
  
  )
}

export default App
