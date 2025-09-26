'use client';
import { IoLogoLinkedin } from "react-icons/io";
import LightRays from "./components/LightRays";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";

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
            <div className="mx-auto px-4 ">
                <div className="flex flex-col justify-center items-start xxs:items-center gap-6 title font-semibold relative z-20">
                    <SplitText
                        text="Soy_Mauro"
                        className="text-4xl 3xs:text-5xl xxs:text-6xl xs:text-7xl sm:text-8xl md:text-9xl mb-8 lg:text-[10rem] xl:text-[14rem]"
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
                    <div className="flex justify-center items-center w-full text-3xl md:text-3xl lg:text-5xl">
                        <h2 className="hidden xs:block ">Desarrollador</h2>
                        <RotatingText
                            texts={['Front-end','Full-stack', 'Back-end']}
                            mainClassName="px-3 overflow-hidden py-2 justify-center rounded-lg text-myBack-800 xxs:ml-4 lg:w-[270px]"
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
                    <div className="flex flex-col xxs:flex-row gap-6  sm:text-lg md:text-xl lg:text-2xl mt-8  w-full xxs:w-fit xxs:h-15">
                        <button 
                            className="bg-myGray-700  text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer"
                        >
                            <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            Descargar CV
                        </button>
                        <button
                            className="bg-myGray-700 text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer"
                        >
                            <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                            ir a Proyectos
                        </button>
                    </div> 
                    <div className="h-15 sm:text-lg md:text-xl lg:text-2xl w-full xxs:w-fit">
                        <a 
                            href="https://www.linkedin.com/in/maurovigliero/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className=""
                            > 
                            <button 
                                className="bg-myGray-700 text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer  items-center w-full gap-3 flex justify-center"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
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