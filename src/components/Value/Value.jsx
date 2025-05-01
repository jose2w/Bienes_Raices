import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Value.css';
import data from '../../utils/accordion';

const Value = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Lado Izquierda */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>

        {/* Lado Derecho */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Nuestro Valor</span>
          <span className='primaryText'>El Valor Que Te Damos</span>
          <span className='secondaryText'>
            Siempre estamos dispuestos a ayudar brindándole los mejores servicios.
            <br />
            Creemos que un buen lugar para vivir puede mejorar tu vida.
          </span>

          <Accordion
            className='accordion'
            allowMultipleExpanded={false}
            preExpanded={[expandedIndex]}
            onChange={(uuids) => {
              if (uuids.length > 0) setExpandedIndex(uuids[0]);
            }}
          >
            {data.map((item, i) => {
              const isExpanded = expandedIndex === i;
              const className = isExpanded ? "expanded" : "collapsed";

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className='flexCenter accordionButton'>
                      <div className="flexCenter icon">
                        {item.icon}
                      </div>
                      <span className="primaryText">
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
