import React from 'react'
import {StyleContacto} from '../styles/Contacto.styles'

export default function Contact() {
  return (
      <StyleContacto>
        <div className='somos'>
          <form className='form'>
            <h3>Queremos excucharte</h3>
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
            <hr className='line'/>
            <label>Pais</label>
            <div className='findUs'>
              <i class="fa-solid fa-location-dot icon"></i>
              <label className='donde'>Direccion</label>
            </div>
            <div className='findUs'>
              <i class="fa-solid fa-phone-volume icon"></i>
              <label className='donde'>XXX-XXX-XXX</label>
            </div>
            <div className='findUs'>
              <i class="fa-solid fa-envelope icon"></i>
              <label className='donde'>Correo electronico</label>
            </div>
            <div className='conect'>
              <label className='follow'>Follow Us</label>
              <div className='socials'>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div>
      </StyleContacto>
  )
}
