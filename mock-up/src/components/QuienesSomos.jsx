import React from 'react'
import {StyleQuienesSomos} from '../styles/QuienesSomos.styles'

export default function QuienesSomos() {
  return (
      <StyleQuienesSomos>
        <div className='somos'>
          <div>
            <h3>Quienes Somos</h3>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur non alias. Harum laboriosam totam, cupiditate iste suscipit unde eaque voluptatem quas. Ex nostrum temporibus cum tempore laboriosam veniam aut.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nobis laborum? Aliquam incidunt accusantium voluptatibus amet? Odio repellat doloribus, voluptas temporibus modi sunt harum, provident, at perspiciatis iusto mollitia voluptatum.
            </p>
            <p className='text'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut dolorum, neque possimus tempore doloremque exercitationem expedita architecto esse ex non vitae enim ea fugiat distinctio eligendi molestiae suscipit ipsam voluptatum?
            </p>
          </div>
          <h3>Nuesto Equipo</h3>
          <div className='full-crew'>
            <div className='crew-member'>
              <img 
                className='crew' 
                id='crew-photo' 
                alt=''
                src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
              <div className='container'>
                <h4>Crew Member</h4>
                <h5>Position</h5>
              </div>
            </div>
            <div className='crew-member'>
              <img 
                className='crew' 
                id='crew-photo' 
                alt=''
                src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
              <div className='container'>
                <h4>Crew Member</h4>
                <h5>Position</h5>
              </div>
            </div>
            <div className='crew-member'>
              <img 
                className='crew' 
                id='crew-photo' 
                alt=''
                src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
              <div className='container'>
                <h4>Crew Member</h4>
                <h5>Position</h5>
              </div>
            </div>
            <div className='crew-member'>
              <img 
                className='crew' 
                id='crew-photo' 
                alt=''
                src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
              <div className='container'>
                <h4>Crew Member</h4>
                <h5>Position</h5>
              </div>
            </div>
          </div>
        </div>
      </StyleQuienesSomos>
  )
}
