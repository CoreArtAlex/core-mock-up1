import React from 'react'
import {StyleHome} from '../styles/Home.styles'

export default function Home() {
  return (
      <StyleHome>
        <div>
          <div className='nosotros'>
            <div className='us'>
              <h3>Que es lo que hacemos?</h3>
              <hr className='line'/>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi optio repellendus officia quidem rem. Earum excepturi adipisci neque natus est, minus commodi odio sed, ipsum, alias iure. Ea, officia.
              </p>
            </div>
            <img 
              className='hacemos' 
              id='hacemos-photo' 
              alt=''
              src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
          </div>
          <div className='nosotros'>
            <img 
              className='hacemos' 
              id='hacemos-photo' 
              alt=''
              src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
            <div className='weDo'>
              <h3>Como lo hacemos?</h3>
              <hr className='line'/>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi optio repellendus officia quidem rem. Earum excepturi adipisci neque natus est, minus commodi odio sed, ipsum, alias iure. Ea, officia.
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum commodi deserunt culpa eos totam corrupti consequatur id corporis! Labore, dolore voluptate consequatur nesciunt aspernatur aliquam quis earum nisi ipsum!
              </p>
            </div>
          </div>
        </div>
      </StyleHome>
  )
}
