import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import ModalContentPro1 from './ModalContentPro1';
import ModalContentPro2 from './ModalContentPro2';
import { FaArrowAltCircleRight } from 'react-icons/fa';

interface ModalProps {
  title: string;
  pro: number;
}

const Modal: React.FC<ModalProps> = ({ title, pro }) => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const modalRef = useRef(null);
  const contentRef = useRef(null);

  const renderTitle = () => {
    
    if (title.includes('<br')) {
      const parts = title.split(/<br[^>]*>/);
      return (
        <>
          {parts[0]}
          <br className="xxs:hidden" />
          {parts[1]}
        </>
      );
    }
    return title;
  };

  useEffect(() => {
    if (isOpen) {
      
      document.body.style.overflow = 'hidden';
      
      // Animación de entrada con GSAP
      gsap.fromTo(overlayRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      
      gsap.fromTo(modalRef.current,
        { 
          scale: 0.8,
          opacity: 0,
          y: 50
        },
        { 
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
          delay: 0.1
        }
      );
      
      gsap.fromTo(contentRef.current,
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          delay: 0.3,
          ease: "power2.out" 
        }
      );
    } else {
      // Restaurar scroll del body cuando se cierra el modal
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    // Animación de salida con GSAP antes de cerrar
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.2,
      ease: "power2.in"
    });
    
    gsap.to(modalRef.current, {
      scale: 0.9,
      opacity: 0,
      y: -30,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.1
    });
    
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      delay: 0.2,
    });
    
    setTimeout(() => setIsOpen(false), 280);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  return (
    <>  
      <div className='h-14'>
        
        <button 
          onClick={() => setIsOpen(true)} 
          className="bg-myOrange-400 text-myGray-800 border border-myGray-800 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group hover:cursor-pointer text-xl text-left truncate flex items-center gap-2"
          style={{ fontSize: 'clamp(.875rem, 2.5vw, 1.3rem)' }}
        >
          <FaArrowAltCircleRight className='mt-1' />
          <span className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-96 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
          {renderTitle()}
        </button>  
      </div>

      {isOpen && (
        <div 
          ref={overlayRef}
          className="fixed inset-0 bg-black/70 flex justify-center items-center backdrop-blur-sm"
          style={{
            zIndex: 99999,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
          onClick={handleOverlayClick}
        >
          <motion.div
            ref={modalRef}
            className="bg-myOrange-700 rounded-2xl max-w-4xl w-full max-h-[85vh] relative shadow-2xl border border-myOrange-600 mx-4"
            style={{ 
              position: 'relative',
              zIndex: 100000
            }}
            onClick={(e) => e.stopPropagation()}
          >
         
            <div 
              ref={contentRef}
              className="overflow-y-auto max-h-[calc(85vh-120px)] p-6"
            > 
              {pro === 1 && <ModalContentPro1 />}
              {pro === 2 && <ModalContentPro2 />}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;