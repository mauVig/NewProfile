import LightRays from "./components/LightRays";
import RotatingText from "./components/RotatingText";

const Header = () => {
    return (
        <header className="w-full min-h-[800px] bg-myBack-800 text-myGray-100 flex justify-center items-center h-full">
            <div style={{ width: '100%', height: '800px', position: 'absolute'}}>
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#FCDDB8"
                    raysSpeed={1.35}
                    lightSpread={7}
                    rayLength={9}
                    followMouse={true}
                    mouseInfluence={0.1}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays"
                />

            </div>
            
            <div className="container mx-auto px-4 ">
                <div className="flex flex-col justify-center items-center gap-6  title font-semibold relative z-20">
                    <h1 className="text-7xl">Soy Mauro Vigliero</h1>
                    <div className="flex justify-center items-center text-5xl">
                        <h2>Desarrollador</h2>
                        <RotatingText
                            texts={['Full-stack', 'Front-end', 'Back-end']}
                            mainClassName="px-3 overflow-hidden py-2 justify-center rounded-lg text-myBack-800 ml-4 w-[270px]"
                            staggerFrom={"last"}
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-190%" }}
                            staggerDuration={0.035}
                            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={2500}
                        />
                    </div> 
                    <div className="flex gap-6 text-2xl mt-8">
                        <button className="border-2 border-myBack-500  text-myBack-400 font-bold py-2 px-4 rounded-4xl">
                            Descargar CV
                        </button>
                        <button>
                            ir a Proyectos
                        </button>
                    </div>                      
                </div>   
            </div>
        </header>
    );
};

export default Header;