import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'

const Contact = () => {
  return (
    <section className=" c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* Lado Izquierdo */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Contáctenos</span>
                <span className='primaryText'>Fácil de contactar</span>
               <span className='secondaryText'>Siempre estamos listos para ayudarle brindándole los mejores servicios.
                 Creemos que un buen lugar para vivir puede mejorar su vida.</span>

                <div className="flexColStart contactModes">
                  {/* First row */}
                  <div className="flexStart row">
                      <div className="flexColCenter mode">
                        <div className="flexStart">
                          <div className="flexCenter icon">
                            <MdCall size={25}/>
                          </div>
                          <div className="flexColStart detail">
                            <span className="primaryText">Llamada</span>
                            <span className='secondaryText'>021 123 145 14</span>
                          </div>
                        </div>
                        <div className="flexCenter button">
                        LLama Ahora
                      </div>
                      </div>

                 {/*Second row */}
                 <div className="flexColCenter mode">
                        <div className="flexStart">
                          <div className="flexCenter icon">
                            <BsFillChatDotsFill size={25}/>
                          </div>
                          <div className="flexColStart detail">
                            <span className="primaryText">Chatea</span>
                            <span className='secondaryText'>021 123 145 14</span>
                          </div>
                        </div>
                        <div className="flexCenter button">
                        Chatea Ahora
                      </div>
                      </div>
                  </div>

                  {/* Second Mode */}
                  <div className="flexStart row">
                      <div className="flexColCenter mode">
                        <div className="flexStart">
                          <div className="flexCenter icon">
                            <MdCall size={25}/>
                          </div>
                          <div className="flexColStart detail">
                            <span className="primaryText">VideoLlamada</span>
                            <span className='secondaryText'>021 123 145 14</span>
                          </div>
                        </div>
                        <div className="flexCenter button">
                        VideoLlamada Ahora
                      </div>
                      </div>

                 {/*Second row */}
                 <div className="flexCenter mode">
                        <div className="flexStart">
                          <div className="flexCenter icon">
                            <HiChatBubbleBottomCenter size={25}/>
                          </div>
                          <div className="flexColStart detail">
                            <span className="primaryText">Mensaje</span>
                            <span className='secondaryText'>021 123 145 14</span>
                          </div>
                        </div>
                        <div className="flexCenter button">
                        Mensaje Ahora
                      </div>
                      </div>
                  </div>
                </div>
            </div>

            {/* lado Derecho */}
            <div className='c-right'>
                <div className="image-container">
                    <img src="./contact.jpg" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
