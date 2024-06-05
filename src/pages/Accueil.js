import React from 'react'
import ArtImport from '../component/ArtImport'
import LastAdded from '../component/LastAdded'
import './Accueil.css'

export default function Accueil() {
  return (
    <div className='accueil-container'>
    <ArtImport/>
    <LastAdded/>
    </div>
  )
}
