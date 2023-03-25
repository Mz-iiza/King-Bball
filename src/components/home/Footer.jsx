import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import {GiHotMeal} from 'react-icons/gi'
import {MdMapsHomeWork} from 'react-icons/md'
import { GiCampingTent } from "react-icons/gi";
import "./home.css";


const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>KING basketball CAMP</a>

    <ul className='permalinks'>
      <li><a href="#"> HEADER<MdMapsHomeWork /></a></li>
      <li><a href="#nav"> LAST SEASON<GiCampingTent /></a></li>
      <li><a href="#diet"> DIET<GiHotMeal /></a></li>
      
    </ul>

    <div className="footer__socials">
    <a href="https://facebook.com" target="_blank" rel="noreferrer"><BsFacebook /></a>
    <a href="https://instagram.com/kkingsley_" target="_blank" rel="noreferrer"><SiInstagram /></a>
    <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
    </div>

    <div className="footer_copyright">
      <small>&copy;KINGbasketballCAMP. All right reserved.</small>
    </div>
   </footer>
  )
}

export default Footer