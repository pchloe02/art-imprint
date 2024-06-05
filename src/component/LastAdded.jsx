import React from 'react'
import '../LastAdded.css'
import { Link } from 'react-router-dom'

export default function LastAdded() {
    return (
        <>
            <div className='lastadded'>
                <div className='title-lastadded'>
                    <h2>Derniers ajouts</h2>
                    <Link to="/profile/" className='seemore-btn'>
                        Voir plus
                    </Link>
                </div>
                <div className='gallery-container'>
                    <div className='gallery-element'>
                        <img className='img-gallery' src="" alt="" />
                        <p>Date d'ajout</p>
                        <p>Titre</p>
                    </div>
                    <div className='gallery-element'>
                        <img className='img-gallery' src="" alt="" />
                        <p>Date d'ajout</p>
                        <p>Titre</p>
                    </div>
                    <div className='gallery-element'>
                        <img src="" alt="" className='img-gallery' />
                        <p>Date d'ajout</p>
                        <p>Titre</p>
                    </div>
                </div>
            </div>
        </>
    )
}
