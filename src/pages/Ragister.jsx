import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Ragister = () => {
  const [userData, setUserData] =useState({
    name: '',
    email:'',
    password: '',
    password2: ''
  })

  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className="container">
        <h2>Sing Up</h2>
        <form className="form register__form">
          <p className="form__error-message">
            This is an error message !
          </p>
          <input type='text' placeholder='full name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type='text' placeholder='E-mail' name='email' value={userData.email} onChange={changeInputHandler} />
          <input type='password' placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}  />
          <input type='password2' placeholder='Conforim Password' name='password2' value={userData.password2} onChange={changeInputHandler} />
          <button type="submit" className='btn primary'>Register</button>
          <small>Already have an account ?<Link to='/login'>sign in</Link></small>
        </form>
      </div>
    </section>
  )
}

export default Ragister