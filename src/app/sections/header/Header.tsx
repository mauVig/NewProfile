'use client';
import { IoLogoLinkedin } from "react-icons/io";
import LightRays from "./components/LightRays";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md";

const Header = () => {
    
    return (
        <header className={`w-full min-h-[900px] bg-myBack-800 text-myGray-100 flex justify-center items-center h-full`}>
            <div style={{ width: '100%', height: '900px', position: 'absolute'}}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FCDDB8"
                    raysSpeed={1.35}
                    lightSpread={20}
                    rayLength={10}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                />
            </div>
            {/* text-[clamp(1.3rem,4vw,3rem)] */}
            <div className="mx-auto px-4 ">
                <div className="flex flex-col justify-center items-start xxs:items-center gap-6 title font-semibold relative z-20">
                    <SplitText
                        text="Soy_Mauro"
                        // className="text-4xl 3xs:text-5xl xxs:text-6xl xs:text-7xl sm:text-8xl md:text-9xl mb-8 lg:text-[10rem] xl:text-[14rem]"
                        className="text-[clamp(1.3rem,14vw,14rem)] "
                        delay={150}
                        duration={0.9}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="center"
                        tag="h1"
                    />
                    <div className="flex justify-center items-center w-full text-[clamp(1.3rem,4.6vw,2rem)]">
                        <h2 className="hidden xs:block ">Desarrollador</h2>
                        <RotatingText
                            texts={['Front-end','Full-stack', 'Back-end']}
                            mainClassName="px-3 overflow-hidden py-2 justify-center rounded-lg text-myBack-800 w-full xs:ml-4 xs:w-[180px]"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-190%" }}
                            staggerDuration={0.035}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </div> 
                    <div className="flex flex-col xs:flex-row gap-6 mt-8 sm:text-lg md:text-xl lg:text-2xl w-full xs:w-fit xs:h-15">
                        <a 
                            href="/cv/CV-Mauro-Vigliero-Desarrollador.pdf" 
                            download="CV-Mauro-Vigliero-Desarrollador.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button 
                                className="bg-myGray-700  text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer flex justify-center items-center gap-3 w-full"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex  h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] w-full"></span>
                                <MdDownloadForOffline size={28} />  
                                Descargar CV
                            </button>
                        </a>
                        <a href="#experience">
                            <button
                                className="bg-myGray-700 text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer flex justify-center items-center gap-3 w-full"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                <MdOutlineWork size={28} />
                                ir a Proyectos
                            </button>
                        </a>
                    </div> 
                    <div className="h-15 sm:text-lg md:text-xl lg:text-2xl w-full xs:w-fit">
                        <a 
                            href="https://www.linkedin.com/in/maurovigliero/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=" w-full"
                            > 
                            <button 
                                className="bg-myGray-700 text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer  items-center w-full gap-3 flex justify-center"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex  h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] w-full"></span>
                                <IoLogoLinkedin size={28} />
                                Linkedin 
                            </button>
                        </a>
                    </div>                     
                </div>   
            </div>
        </header>
    );
};

export default Header;