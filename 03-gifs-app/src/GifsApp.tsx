import { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './components/CustomHeader'
import {SearchBar} from './components/SearchBar'
import { PreviousSearches } from './gifs/components/PreviousSearches'
import { GifsList } from './gifs/components/GifsList'


export const GifsApp = () => {

const [previousTerms, setPreviousTerms] = useState<string[]>([]);

    const handleTermClicked = (term: string) => {
    console.log({term});
    }

    const handleSearch = (query: string) => {
        const term = query.trim().toLowerCase();
        if (term === '') return;
        if(previousTerms.includes(term)) return;
        setPreviousTerms(prev => [term, ...prev].slice(0, 8));
        }
    


  return (
    <>  
    <CustomHeader title="Buscador de Gifs" description="Descubre y comparte Gifs"/>

    <SearchBar description="Buscar Gifs" buttonTag="Buscar" 
    onQuery={handleSearch}
    />

    <PreviousSearches searches={previousTerms} onLabelClicked={handleTermClicked} />
    
    <GifsList gifs={mockGifs.map(gif => gif.url)} />
    
    </>
  )
}


