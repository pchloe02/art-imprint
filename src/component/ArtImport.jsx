import React from 'react'
import '../ArtImport.css'
import drawing1 from '../img/knight-duty.png'

export default function ArtImport() {
    return (
        <div className='artimport-container'>
            <div className='encart-art'>
                <div className='img-art-container'>
                    <img className='img-art' src={drawing1} alt="img du jour" />
                </div>
                <div className='info-art'>
                    <h2>Contribution du jour</h2>
                    <h4 className='text-art'>Titre : <br /><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quos temporibus porro quaerat nostrum, voluptas praesentium minima natus, voluptates odit magni exercitationem? Doloribus provident impedit delectus sunt, odit quia nulla?</span></h4>
                    <h4 className='text-art'>Détails : <br /><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores dolores ratione nisi minima. Libero quod id, sequi praesentium ullam ducimus eveniet eius. Aliquam unde corporis adipisci! Dolore, sequi veritatis.</span></h4>
                </div>
            </div>

        </div>
    )
}
