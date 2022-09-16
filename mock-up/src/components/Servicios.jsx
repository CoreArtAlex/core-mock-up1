import React from 'react'
import {StyleServicios} from '../styles/Servicios.styles'

export default function Servicios() {
  return (
      <StyleServicios>
        <div className='servicio-general'>
          <div className='serv-titulo'>
          </div>
          <br />
          <div className='servicio'>
            <h3 className='titulo'>Servicio 1</h3>
            <hr className='line'/>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod, corrupti porro dolore, explicabo veritatis ipsam amet facere nemo odio cumque iure recusandae ducimus enim consequuntur quibusdam vero veniam. Ipsum.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae perferendis nam ab dolorum voluptatibus quisquam nemo porro quibusdam possimus reprehenderit odit officiis quos mollitia earum laboriosam, a cumque ipsum.
            </p>
            <button className='learn-btn' 
            id='learn'>Learn More...</button>
          </div>
          <br />
          <div className='servicio'>
            <h3 className='titulo'>Servicio 2</h3>
            <hr className='line'/>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod, corrupti porro dolore, explicabo veritatis ipsam amet facere nemo odio cumque iure recusandae ducimus enim consequuntur quibusdam vero veniam. Ipsum.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae perferendis nam ab dolorum voluptatibus quisquam nemo porro quibusdam possimus reprehenderit odit officiis quos mollitia earum laboriosam, a cumque ipsum.
            </p>
            <button className='learn-btn' 
            id='learn'>Learn More...</button>
          </div>
          <br />
          <div className='servicio'>
            <h3 className='titulo'>Servicio 3</h3>
            <hr className='line'/>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, quod, corrupti porro dolore, explicabo veritatis ipsam amet facere nemo odio cumque iure recusandae ducimus enim consequuntur quibusdam vero veniam. Ipsum.
            </p>
            <p className='text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod repudiandae perferendis nam ab dolorum voluptatibus quisquam nemo porro quibusdam possimus reprehenderit odit officiis quos mollitia earum laboriosam, a cumque ipsum.
            </p>
            <button className='learn-btn' 
            id='learn'>Learn More...</button>
          </div>
        </div>
      </StyleServicios>
  )
}
