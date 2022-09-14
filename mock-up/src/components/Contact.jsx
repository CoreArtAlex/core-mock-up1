import React from 'react'
import {StyleContacto} from '../styles/Contacto.styles'

export default function Contact() {
  return (
      <StyleContacto>
        <div className='somos'>
          <form className='form'>
            <h3>Queremos excucharte:</h3>
            <hr />
            <p>

              Dejanos saber tus preguntas, dudas y sugerencias!
            </p>
            <label for='name'>Name:</label>
            <br/>
            <input className='input' type="text" id='name' name='name' placeholder="Tu Nombre"></input>
            <br/>
            <label for='email'>email:</label>
            <br/>
            <input className='input' type="email" id='email' name='email' placeholder="Correo electronico"></input>
            <br/>
            <label for='tellUs'>Subject:</label>
            <br/>
            <textarea className='input-subject' type="text" id='tellUs' name='tellUs' placeholder="Que Piensas"></textarea>
            <br/>
            <button className='submit' id='submit-btn'>Submit</button>
          </form>
          <div className='info'>
            <h3>Donde nos puedes encontrar?</h3>
            <label>Pais</label>
            <div className='findUs'>
              <img 
                className='location' 
                id='location-logo' 
                alt=''
                src=''></img>
              <p>Direccion</p>
            </div>
            <div className='findUs'>
              <img 
                className='location' 
                id='phone' 
                alt=''
                src=''></img>
              <p>XXX-XXX-XXX</p>
            </div>
            <div className='findUs'>
              <img 
                className='location' 
                id='email' 
                alt=''
                src=''></img>
              <p>Correo electronico</p>
            </div>
            <div className='conect'>
            <label className='follow'>Follow Us</label>
            <img 
                className='socials' 
                id='facebook' 
                alt=''
                src=''></img>
            <img 
                className='socials' 
                id='instagram' 
                alt=''
                src=''></img>
            <img 
                className='socials' 
                id='twitter' 
                alt=''
                src=''></img>
            <img 
                className='socials' 
                id='linkedin' 
                alt=''
                src=''></img>
          </div>
          </div>
        </div>
      </StyleContacto>
  )
}
