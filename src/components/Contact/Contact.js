import React from 'react'
import MainTemplates from '../templates/Main.Templates';
import * as Styled from './style'
const Contact = () => {
  return (
    <MainTemplates>
      <Styled.div>
        <h1>Contact:</h1>
        <h2>example@gmail.com</h2>
        <h1>Telefon</h1>
        <h2>+48 111222333</h2>
      </Styled.div>
    </MainTemplates>
  )
}

export default Contact;