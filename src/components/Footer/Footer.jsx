import './Footer.css'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="section f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
              {/* Lado Izquierdo */}
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>

                <span className='secondaryText'>
                Nuestra visión es hacer que todas las personas
                <br />
                tengan el mejor lugar donde vivir.
                </span>
            </div>  

            <div className="flexColStart f-right">
                <span className='primaryText'>Informacion</span>
                <span className='secondaryText'>145 New york, FL 4571, USA</span>

                <div className="flexCenter f-menu">
                    <span>Propiedades</span>
                    <span>Servicios</span>
                    <span>Producto</span>
                    <span>Sobre nosotros</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
