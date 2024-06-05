import React from 'react'
import './LastAdded.css'
import { Link } from 'react-router-dom'
import MockArt from '../MockArt.json'

export default function LastAdded() {
    //ici je veux afficher des 3 dernières img ajoutés à l'array sans compter le dernier
    // enlever le dernier élement, puis prendre le nvl array et l'inverser ? 
    //puis le restreindre à n'afficher que les 3 premiers élements ?

    const lastUpdatesElementArr = MockArt.slice(1, 4).reverse()
    console.log(lastUpdatesElementArr)
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

                    {lastUpdatesElementArr.map((el) => (
                        <div className='gallery-element'>
                            <img className='img-gallery' src={el.image} alt={el.title} />
                            <p>{el.created_at}</p>
                            <p>{el.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
