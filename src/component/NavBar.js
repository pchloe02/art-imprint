import React from 'react'
import './NavBar.css'
import "https://kit.fontawesome.com/6a21cd18bd.js";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className='vertical-header'>
        <div className='logo-wrap'>
            <h1 className='logo'>Art <br/> Imprint</h1>
        </div>

        <div className='nav-bar'>
             <ul className='main-nav'>
               <Link to="/accueil"><li className='nav-icon'><i className="fa-solid fa-house"></i>Accueil</li></Link>
               <Link to="/profile/" ><li className='nav-icon'><i className="fa-solid fa-user"></i>Profil</li></Link>
               <Link to="/stats/"><li className='nav-icon'><i className="fa-solid fa-chart-simple"></i>Statistiques</li></Link>
               <Link to="/objectifs/"><li className='nav-icon'><i className="fa-solid fa-flag"></i>Objectifs</li></Link>
                <Link to="/add/"><li className='nav-icon'><i className="fa-solid fa-plus"></i>Ajouter</li></Link>
            </ul>
        </div>
            <ul className='foot-bar'>
               <Link to='/logout/'><li><i className="fa-solid fa-right-from-bracket"></i></li></Link>
               <Link to='/setting/' ><li><i className="fa-solid fa-gear"></i></li></Link>
            </ul>
    </div>
  )
}