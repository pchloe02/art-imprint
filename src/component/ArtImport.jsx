import React from 'react'
import './ArtImport.css'
import MockArt from '../MockArt.json'

export default function ArtImport() {
    // ici je veux isolé la dernière img importer de l'array d'obj
    const lastElementArray = MockArt[MockArt.length - 1]
    return (
        <div className='artimport-container'>
            <div className='encart-art'>
                <div className='img-art-container'>
                    <img className='img-art' src={lastElementArray.image} alt={lastElementArray.title} />
                </div>
                <div className='info-art'>
                    <h2>Contribution du jour</h2>
                    <h4 className='text-art'>Titre : <br /><span>{lastElementArray.title}</span></h4>
                    <h4 className='text-art'>Détails : <br /><span>{lastElementArray.details}</span></h4>
                    <p>{lastElementArray.created_at}</p>
                </div>
            </div>

        </div>
    )
}
