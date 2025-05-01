import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from "react-countup";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="padding innerWidth hero-container flexCenter">
          {/* Lado Izquierdo */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"/>
              <motion.h1
              initial={{y: "2rem", opacity: 0}}
              animate={{y: 0, opacity:1}}
              transition={{
                duration: 2,
                type: "spring"
              }}
              >
                Descubra <br/> 
                la propiedad más 
                <br/> adecuada
              </motion.h1>
            </div>
            <div className="flexColStart hero-des">
              <span className='secondaryText'>Encuentra una variedad de propiedades que se adapten a ti muy fácilmente</span>
              <span className='secondaryText'>Olvídate de todas las dificultades para encontrar una residencia para ti</span>
            </div>

            <div className="flexCenter search-bar">
              <HiLocationMarker color="var(--blue)" size={25}/>
              <input type="text"/>
              <button className='button'>Buscar</button>
            </div>

            <div className='flexCenter stats'>
                <div className="flexColStart stat">
                  <span>
                    <CountUp star={80000} end={9000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Producto Premium</span>
                </div>

                <div className="flexColStart stat">
                  <span>
                    <CountUp star={1950} end={2000} duration={4}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText' >Cliente feliz</span>
                </div>

                <div className="flexColStart stat">
                  <span>
                    <CountUp  end={28}/>
                    <span>+</span>
                  </span>
                  <span className='secondaryText'>Ganadores de premios</span>
                </div>
            </div>

          </div>
          {/* Lado Derecho */}
          <div className="flexCenter hero-right">
            <motion.div
            initial={{x: "7rem", opacity: 0}} 
            animate={{x: 0, opacity: 1}}
            transition={{
              duration: 2,
              type: "spring"
            }
            
            }
            className="image-container">
              <img src="./hero-image.png" alt="" />
            </motion.div>
          </div>
      </div>
    </section>
  )
}

export default Hero
