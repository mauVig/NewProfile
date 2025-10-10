'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { IoLogoLinkedin } from "react-icons/io";
import LightRays from "./components/LightRays";
import RotatingText from "./components/RotatingText";
import SplitText from "./components/SplitText";
import { MdDownloadForOffline, MdOutlineWork } from "react-icons/md";
import { BsArrowDownCircleFill } from "react-icons/bs";

const Header = () => {
    const headerRef = useRef<HTMLElement>(null);
    const h2Ref = useRef<HTMLHeadingElement>(null);
    const button1Ref = useRef<HTMLAnchorElement>(null);
    const button2Ref = useRef<HTMLAnchorElement>(null);
    const linkedinRef = useRef<HTMLDivElement>(null);
    const arrowRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const isMobile = window.innerWidth <= 512;
        const tl = gsap.timeline({ delay: 1.2 });

        // Fade-in secuencial para todos los elementos
        tl.fromTo(h2Ref.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        )
        // Pausa para esperar que termine el RotatingText (delay 2.0 + 0.5 + duración de animación)
        .to({}, { duration: 1.2 }); // Esperar ~1.3s para que termine RotatingText

        // Animación condicional para botones según el tamaño de pantalla
        if (isMobile) {
            // En móviles (≤512px): botones aparecen uno por uno
            tl.fromTo([button1Ref.current, button2Ref.current, linkedinRef.current], 
                { opacity: 0, y: 30, scale: 0.95 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.3, ease: "power2.out" }
            );
        } else {
            // En pantallas grandes (>512px): botones aparecen juntos
            tl.fromTo([button1Ref.current, button2Ref.current, linkedinRef.current], 
                { opacity: 0, y: 30, scale: 0.95 }, 
                { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" }
            );
        }

        tl.fromTo(arrowRef.current, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" }
        );
    }, []);
    
    return (
        <header className={`w-full min-h-svh bg-myBack-800 text-myGray-100 flex justify-center items-center h-full relative`}>
            <div style={{ width: '100%', height: '100%', position: 'absolute'}}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FCDDB8"
                    raysSpeed={1}
                    lightSpread={10}
                    rayLength={3}
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
                    <motion.div 
                        className="flex justify-center items-center w-full text-[clamp(1.7rem,5.5vw,2rem)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.0, duration: 0.8 }}
                    >
                        <h2 ref={h2Ref} className="hidden xs:block" style={{ opacity: 0 }}>Desarrollador</h2>
                        <RotatingText
                            texts={['Front-end','Full-stack', 'Back-end']}
                            mainClassName="px-3 overflow-hidden py-2 justify-center rounded-lg text-myBack-800 w-full xs:ml-4 xs:w-[180px]"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-190%" }}
                            staggerDuration={0.035}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400, delay: 0.5 }}
                            rotationInterval={3000}
                        />
                    </motion.div> 
                    <div className="flex flex-col xs:flex-row gap-6 mt-8 sm:text-lg md:text-xl lg:text-2xl w-full xs:w-fit xs:h-15">
                        <a 
                            ref={button1Ref}
                            href="/cv/CV-Mauro-Vigliero-Desarrollador.pdf" 
                            download="CV-Mauro-Vigliero-Desarrollador.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ opacity: 0 }}
                        >
                            <button 
                                className="bg-myGray-700  text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer flex justify-center items-center gap-3 w-full"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex  h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] w-full"></span>
                                <MdDownloadForOffline size={28} />  
                                Descargar CV
                            </button>
                        </a>
                        <a ref={button2Ref} href="#experience" style={{ opacity: 0 }}>
                            <button
                                className="bg-myGray-700 text-myGray-300 border border-myGray-300 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer flex justify-center items-center gap-3 w-full"
                            >
                                <span className="bg-red-200 shadow-red-200 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                <MdOutlineWork size={28} />
                                ir a Proyectos
                            </button>
                        </a>
                    </div> 
                    <div ref={linkedinRef} className="h-15 sm:text-lg md:text-xl lg:text-2xl w-full xs:w-fit flex flex-col items-center" style={{ opacity: 0 }}>
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
                    
                    {/* Flecha de navegación separada para que forme parte de la altura del header */}
                    <div className="flex justify-center w-full my-8 xs:my-6">
                        <a href='#textAndStack' ref={arrowRef} className="animate-bounce z-70" style={{ opacity: 0 }}>
                            <BsArrowDownCircleFill size={40} className='text-myGray-300'/>
                        </a>
                    </div>                     
                </div>   
            </div>
           
        </header>
    );
};

export default Header;