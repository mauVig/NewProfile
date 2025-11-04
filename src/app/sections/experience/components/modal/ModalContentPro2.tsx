import React from 'react';
import {
  FaNodeJs, 
  FaDocker, 
  FaUsers, 
  FaUserTie, 
  FaCode,
  FaVial,
  FaCrown,
  FaLightbulb,
  FaComments,
  FaMicrophone,
  FaHeart,
  FaGraduationCap,
  FaMobile,
  FaAngular,
  FaAws
} from 'react-icons/fa';
import { SiTypescript, SiExpress, SiJest, SiNgrx, SiNestjs } from 'react-icons/si';
import { MdBusinessCenter } from "react-icons/md";
import { HiMiniBriefcase } from 'react-icons/hi2';
import { AiFillSnippets } from 'react-icons/ai';


const ModalContentPro2 = () => {
  return (
    <div className="text-myBack-800 leading-relaxed font-rubik">
      <div className=" py-6 rounded-xl mb-6  text-myGray-800 text-center">
        <div className="flex items-center mb-6">
          <MdBusinessCenter  className="text-4xl mr-2 pt-1.5" />
          <h3 className="m-0 text-4xl font-bold ">
            Evaluar oportunidades de negocio.
          </h3>
        </div>
        
        <p className="m-0 text-2xl text-left font-medium">
          En este proyecto nos encargamos construir una plataforma para que puedan evaluar oportunidades de negocios en base a los distintos recursos.
        </p>
        
        <p className="m-0 text-xl text-left font-medium mt-4">
          Construimos una tabla interactiva. Esta tabla te permitia agregar recursos (como{' '}
          <span className="inline-flex items-center gap-1">
              <HiMiniBriefcase className="text-xl" />
              trabajadores
          </span>
          {' '}y{' '}
          <span className="inline-flex items-center gap-1">
              <AiFillSnippets  className="text-xl" />
              materiales
          </span>
          ), y calculaba automáticamente métricas clave como las horas trabajadas, los feriados, los costos de cada recurso, etc. Esto permitia de manera eficiente, evaluar diferentes oportunidades de negocio basándose en datos precisos.
        </p>
      </div>

      {/* Mi Rol */}
      <div className="bg-myBack-700 text-myBack-200 p-4 rounded-lg mb-5 space-y-8">
        <div>
            <div className="flex items-center mb-3">
            <FaCode className="text-xl text-myOrange-800 mr-2" />
            <h4 className="m-0 text-2xl font-semibold ">
                Mi Rol:  <span className='text-myOrange-800 underline underline-offset-4'>Desarrollador Full Stack</span>  
            </h4>
            </div>
            <p className="m-0 text-xl ml-7">
              Distintos user stories tanto de backend como de frontend.
            </p>
        </div>
        <div >
            <h4 className="text-xl font-semibold  mb-4 flex items-center">
                <FaLightbulb className="mr-2 text-myOrange-800" />
                Tecnologías Utilizadas
            </h4>
            <div className="grid md:grid-cols-2 gap-4 ml-7">
                <div>
                    <h5 className="m-0 mb-2 text-xl font-semibold underline underline-offset-4">
                        Frontend:
                    </h5>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                            <FaAngular className="text-lg" style={{ color: '#dd1d16' }} />
                            <span className="text-lg text-myOrange-800">Angular</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiTypescript className="text-lg" style={{ color: '#3178C6' }} />
                            <span className="text-lg text-myOrange-800">TypeScript</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <SiNgrx className="text-lg" style={{ color: '#B52E31' }} />
                            <span className="text-lg text-myOrange-800">Ngrx</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="m-0 mb-2 text-xl font-semibold underline underline-offset-4">
                        Backend:
                    </h5>
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-1">
                            <FaNodeJs className="text-lg" style={{ color: '#339933' }} />
                            <span className="text-lg text-myOrange-800">Node.js</span>
                        </div>
                        {/* <div className="flex items-center gap-1">
                            <SiExpress className="text-lg" style={{ color: '#339933' }} />
                            <span className="text-lg text-myOrange-800">Express.js</span>
                        </div> */}
                        <div className="flex items-center gap-1">
                            <SiNestjs  className="text-lg" style={{ color: '#B52E31' }} />
                            <span className="text-lg text-myOrange-800">Nest js</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaAws className="text-lg" style={{ color: '#47A248' }} />
                            <span className="text-lg text-myOrange-800">AWS</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaDocker className="text-lg" style={{ color: '#2496ED' }} />
                            <span className="text-lg text-myOrange-800">Docker</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="m-0 mb-2 text-xl font-semibold underline underline-offset-4">
                        Testing:
                    </h5>
                    <div className="flex items-center gap-1">
                        <SiJest className="text-lg" style={{ color: '#C21325' }} />
                        <span className="text-lg text-myOrange-800">Jest (End-to-end)</span>
                    </div>
                </div>
            </div>
        </div>
      </div>


      {/* Composición del Equipo */}
      <div className="bg-myOrange-400 p-4 rounded-lg mb-5 border border-myOrange-400">
        <h4 className="m-0 mb-3 text-xl font-semibold  flex items-center">
          <FaUsers className="mr-2" />
          Composición del Equipo
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-1">
            <FaCrown className=" text-xl" />
            <span className="text-xl ">1 Scrum Master</span>
          </div>
          <div className="flex items-center gap-1">
            <FaUserTie className=" text-xl" />
            <span className="text-xl ">1 Manager</span>
          </div>
          <div className="flex items-center gap-1">
            <FaCode className=" text-xl" />
            <span className="text-xl ">4 Developers</span>
          </div>
          <div className="flex items-center gap-1">
            <FaVial className=" text-xl" />
            <span className="text-xl ">2 Testing</span>
          </div>
        </div>
      </div>

      {/* Mi Contribución */}
      <div className="bg-myBack-700 text-myBack-200 p-4 rounded-lg mb-5 ">
        <div className="mb-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 justify-center items-center">
              <FaLightbulb className="text-myOrange-800 text-4xl mt-0.5"/>
              <span className="text-lg px-2 leading-5 text-center">
                Responsables de mantener funcionando correctamente la aplicación.
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <FaLightbulb className="text-myOrange-800 text-4xl mt-0.5" />
              <span className="text-lg px-2 leading-5 text-center">
                En las reuniones de refinement siempre era una de las personas más creativas a la hora de implementar alguna nueva feature.
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <FaMobile  className="text-myOrange-800 text-4xl mt-0.5" />
              <span className="text-lg px-2 leading-5 text-center">
                Yo era el único responsable de que la aplicación se vea correctamente en todos los dispositivos.
              </span>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center">
              <FaMicrophone className="text-myOrange-800 text-4xl mt-0.5" />
              <span className="text-lg px-2 leading-5 text-center">
                En las reuniones me destacaba por generar un ambiente agradable ( Soy locutor nacional de radio y televisión )
              </span>
            </div>
          </div>
        </div>
        <p className="m-0 text-xl text-center mt-8 font-bold">
          Utilizamos <span className="text-myOrange-800">metodologías ágiles</span>  para trabajar en equipo.
        </p>
      </div>

      {/* Reflexión Personal */}
      <div className="bg-myOrange-600 p-6 rounded-lg border-2 border-myOrange-500">
        <h4 className="m-0 mb-5 text-xl font-bold flex items-center">
          <FaHeart className="mr-3 text-xl" />
          Reflexión Personal
        </h4>
        <div className="mb-5 font-bold">
          <div className="flex items-start gap-3 mb-4">
            <FaGraduationCap className="text-lg mt-1 flex-shrink-0" />
            <span className="text-base ">
              A este proyecto le tengo un gran recuerdo por ser el primero dentro de una empresa multinacional como Accenture. Me enseñó a entender cómo es un proyecto a gran escala.
            </span>
          </div>
          <div className="flex items-start gap-3 mb-4">
            <FaComments className="text-lg mt-1 flex-shrink-0" />
            <span className="text-base ">
              Empecé a entender y a mejorar mis habilidades blandas, me enseñó a comunicarme correctamente y a quién es debido respetando los roles y los ritmos de cada uno.
            </span>
          </div>
        </div>
        <div className="bg-myOrange-400 p-5 rounded-lg border border-myOrange-400 font-bold">
          <p className="m-0 text-base  italic text-center">
            Lamentablemente me incorporé en el último año de vida del proyecto, ya que la empresa decidió cerrarlo por temas de presupuesto. Aún así, me llevo una gran experiencia y aprendizaje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModalContentPro2;