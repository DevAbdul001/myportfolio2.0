import { projects } from "../Assets/images"
import { add } from "../Assets/icons"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

const Projects = () => {
    useGSAP(()=>{
        gsap.fromTo('#add',{
            y:10,
            opacity:0
        },{
            y:0,
            opacity:1,
            rotation:360,
            duration:1,
            ease:'power1.inOut',
            repeat:-1,
            repeatDelay:1.5
        })
    },[])
  return (
    <section
      id="projects"
      className='w-full py-16 px-4 md:px-8 flex flex-col justify-center items-center 
                 bg-gray-50 shadow-2xl rounded-[50px] md:rounded-[100px] 
                 min-h-[50vh] space-y-10 max-w-7xl mx-auto'
    >
      <div>
        <h1 className="text-3xl md:text-4xl font-bold font-montserrat 
                       text-center text-gray-800">
          Projects
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                      gap-6 md:gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-slate-100 rounded-lg shadow-md overflow-hidden 
                       transform transition duration-300 
                       hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
                
                <h2 className="text-xl font-semibold text-gray-800 cursor-pointer
                             text-center">
                <a href='{...project.href}'>{project.name}</a>
              </h2>
                
              
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-center items-center">
            <img
            id="add"
            height={70}
            width={70}
            src={add}
            />
            <h1 className="text-2xl font-semibold font-palanquin text-slate-gray mt-10">Yours could be next</h1>
        </div>
      </div>
    </section>
  )
}

export default Projects