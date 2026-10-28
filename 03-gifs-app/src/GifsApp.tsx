import React from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './components/CustomHeader'

export const GifsApp = () => {
  return (
    <>  
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte Gifs"/>


    <div className="search-container">
        <input type="text" placeholder="Buscar gifs..." />
        <button>Buscar</button>
    </div>

    <div className="previous-searches">
       <h2>Búsquedas anteriores</h2>
        <ul className='previous-searches-list'>
            <li>Gato</li>
            <li>Perro</li>
            <li>Memes</li>
        </ul>
    </div>

    <div className="gifs-container">
        {
            mockGifs.map((gif) => (
                <div key={gif.id} className="gif-card">
                    <img src={gif.url} alt={gif.title} />
                    <h3>{gif.title}</h3>
                    <p>
                        {gif.width}x{gif.height}(1.5mb)
                    </p>
                </div>
            ))
        }
    </div>


    </>
  )
}


