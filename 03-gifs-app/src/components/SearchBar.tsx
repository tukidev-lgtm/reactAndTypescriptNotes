import  { useState } from 'react'

interface SearchBarProps {
    description: string
    buttonTag: string
    onQuery: (query: string) => void;
   }

export const SearchBar = ({description, buttonTag, onQuery}: SearchBarProps) => {

    const [query, setQuery] = useState('');

    const handleSearch = () => {
        onQuery(query.trim() !== '' ? query.trim() : '');
        setQuery('');
    };

    return (
        <div className="search-container">
        <input type="text" 
        placeholder={description}
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        }}/>
        <button onClick={handleSearch}>{buttonTag}</button>
    </div>
    )
}