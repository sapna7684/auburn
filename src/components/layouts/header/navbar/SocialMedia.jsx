import React from 'react'
import {Link} from 'react-router-dom'
import {GrFacebookOption} from 'react-icons/gr'
import {FaInstagram , FaYelp} from 'react-icons/fa'

export const SocialMedia = () => {
  return (
    <ul className='media-wrap'>
        <li><Link to="/"><FaYelp/></Link></li>
        <li><Link to="/"><FaInstagram /></Link></li>
        <li><Link to="/"><GrFacebookOption/></Link></li>
    </ul>
  )
}
