import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../img/avatar15.jpg'
import { FaEdit } from 'react-icons/fa'
import { FaCheck } from 'react-icons/fa'

const UserProfile = () => {
  const[avatar, setAvatar] = useState('Avatar')
  const[name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[currentpassword, setCurrentPassword] = useState('')
  const[newpassword, setNewPassword] = useState('')
  const[confirmNewPassword, setConfirmNewPassword] = useState('')
  return (
   <section className="profile">
    <div className='container profile__container'>
      <Link to={`myposts/sdfsdf`} className='btn'>My posts</Link>


      <div className="profile__detail">
         <div className='avatar__wrapper'>
          <div className='pofile__avatar'>
            <img src={Avatar} alt="" />
          </div>
          
          <from className= 'avatar__form'>
            <input type='file' name='avatar' id='avatar' onChange={e => setAvatar(e.target.files[0])} accept='png, jpg, jpeg'/>
            <label htmlFor="avatar">
              <FaEdit />
            </label>
          </from>
          <button className='profile__avatar-btn'><FaCheck /></button> 
         </div>  

         <h1>Ernest Achiever</h1>

         <form className='form profile__form'>
          <p className='form__error-message'>
            This is an error message
          </p>
          <input type='text' placeholder='Full name' value={name} onChange={e => setName(e.target.value)} />
          <input type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type='password' placeholder='currentpassword' value={currentpassword} onChange={e => setCurrentPassword(e.target.value)} />
          <input type='password' placeholder='newpassword' value={newpassword} onChange={e => setNewPassword(e.target.value)} />
          <input type='password' placeholder='confirmNewPassword' value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
          <button type='submit' className='btn primary'>Update my detail</button>
         </form>
     </div>
    </div>
   </section>
  )
}

export default UserProfile