import React from 'react'
import {StyleQuienesSomos} from '../styles/QuienesSomos.styles'

export default function QuienesSomos() {
  return (
      <StyleQuienesSomos>
        <div className='somos'>
          <div>
            <label>Quienes Somos</label>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta consequatur non alias. Harum laboriosam totam, cupiditate iste suscipit unde eaque voluptatem quas. Ex nostrum temporibus cum tempore laboriosam veniam aut.
            </p>
          </div>
          <div className='full-crew'>
            <div className='crew-member'>
              <img 
                className='crew' 
                id='crew-photo' 
                alt=''
                src=''></img>
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
                src=''></img>
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
                src=''></img>
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
                src=''></img>
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
