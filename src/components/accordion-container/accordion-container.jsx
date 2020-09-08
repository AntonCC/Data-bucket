import React from 'react'
import './accordion-container.scss'
import Accordion from '../accordion/accordion'

const AccordionContainer = ({ accordionInfo }) => {
  return (
    <div className="accordion-container">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        {
          accordionInfo.map(info => (
            <Accordion {...info}/>
          ))
        }
      </div>
    </div>
  )
}
export default AccordionContainer