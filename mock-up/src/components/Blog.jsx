import React from 'react'
import {StyleBlog} from '../styles/Blog.styles'

export default function Blog() {
  return (
      <StyleBlog>
        <div className='blog-title'>
          {/* <h3>Lee Experiencias de Nuestros Clientes</h3> */}
        </div>
        <br />
        <div className='blog-experience'>
            <img 
              className='cliente' 
              id='hacemos-photo' 
              alt=''
              src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
            <div className='experience'>
              <h3>Cual fue mi experiencia?</h3>
              <hr className='line'/>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi optio repellendus officia quidem rem. Earum excepturi adipisci neque natus est, minus commodi odio sed, ipsum, alias iure. Ea, officia.
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum commodi deserunt culpa eos totam corrupti consequatur id corporis! Labore, dolore voluptate consequatur nesciunt aspernatur aliquam quis earum nisi ipsum!
              </p>
            </div>
          </div>
          <br />
          <div className='blog-experience'>
            <img 
              className='cliente' 
              id='hacemos-photo' 
              alt=''
              src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
            <div className='experience'>
              <h3>Cual fue mi experiencia?</h3>
              <hr className='line'/>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi optio repellendus officia quidem rem. Earum excepturi adipisci neque natus est, minus commodi odio sed, ipsum, alias iure. Ea, officia.
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum commodi deserunt culpa eos totam corrupti consequatur id corporis! Labore, dolore voluptate consequatur nesciunt aspernatur aliquam quis earum nisi ipsum!
              </p>
            </div>
          </div>
          <br />
          <div className='blog-experience'>
            <img 
              className='cliente' 
              id='hacemos-photo' 
              alt=''
              src='https://i.pinimg.com/originals/b9/7d/97/b97d976b20e9889918becf0f5f4e7cbd.jpg'></img>
            <div className='experience'>
              <h3>Cual fue mi experiencia?</h3>
              <hr className='line'/>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae excepturi optio repellendus officia quidem rem. Earum excepturi adipisci neque natus est, minus commodi odio sed, ipsum, alias iure. Ea, officia.
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illum commodi deserunt culpa eos totam corrupti consequatur id corporis! Labore, dolore voluptate consequatur nesciunt aspernatur aliquam quis earum nisi ipsum!
              </p>
            </div>
          </div>
      </StyleBlog>
  )
}
