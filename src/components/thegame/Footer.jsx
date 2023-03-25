import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {SiInstagram} from 'react-icons/si'
import {FaTwitter} from 'react-icons/fa'
import {RiContactsBookFill} from 'react-icons/ri'
import {IoIosPeople} from 'react-icons/io'
import {MdMapsHomeWork} from 'react-icons/md'
import "./thegame.css";


const Footer = () => {
  return (
   <footer>
    <a href="#" className='footer__logo'>KING basketball CAMP</a>

    <ul className='permalinks'>
      <li><a href="#">HEADER<MdMapsHomeWork /></a></li>
      <li><a href="#tournament">TOURNAMENT<MdMapsHomeWork /></a></li>
      <li><a href="#lifeskills">LIFE STYLE<RiContactsBookFill /></a></li>
      <li><a href="#team"> TEAMS<IoIosPeople /></a></li>
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