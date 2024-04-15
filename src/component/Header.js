import React from 'react'
import '../Header.css'
import "https://kit.fontawesome.com/6a21cd18bd.js";

export default function Header() {
  return (
    <div className='vertical-header'>
      <h1>Art <br/> Imprint</h1>

      <div className='nav-bar'>
        <ul className='main-nav'>
        <li><i className="fa-solid fa-house"></i> Accueil</li>
        <li><i class="fa-solid fa-user"></i> Profil</li>
        <li><i class="fa-solid fa-chart-simple"></i> Statistiques</li>
        <li><i class="fa-solid fa-flag"></i> Objectifs</li>
        <li><i class="fa-solid fa-plus"></i> Ajouter</li>
        </ul>

        <ul className='foot-bar'>
            <li><i class="fa-solid fa-right-from-bracket"></i></li>
            <li><i class="fa-solid fa-gear"></i></li>
        </ul>
      </div>
    </div>
  )
}