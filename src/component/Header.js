import React from 'react'
import '../Header.css'
import "https://kit.fontawesome.com/6a21cd18bd.js";

export default function Header() {
  return (
    <div className='vertical-header'>
        <div className='logo-wrap'>
            <h1 className='logo'>Art <br/> Imprint</h1>
        </div>

        <div className='nav-bar'>
             <ul className='main-nav'>
                <li className='nav-icon'><i className="fa-solid fa-house"></i>Accueil</li>
                <li className='nav-icon'><i class="fa-solid fa-user"></i>Profil</li>
                <li className='nav-icon'><i class="fa-solid fa-chart-simple"></i>Statistiques</li>
                <li className='nav-icon'><i class="fa-solid fa-flag"></i>Objectifs</li>
                <li className='nav-icon'><i class="fa-solid fa-plus"></i>Ajouter</li>
            </ul>
        </div>

            <ul className='foot-bar'>
                <li><i className="fa-solid fa-right-from-bracket"></i></li>
                <li><i className="fa-solid fa-gear"></i></li>
            </ul>
    </div>
  )
}