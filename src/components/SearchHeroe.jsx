import React, { useState } from 'react'
import HeroesList from './HeroesList';

const SearchHeroe = () => {

    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>

            <form className="form-search" onSubmit={handleSubmit}>
                <input className="form-search__input" type="text"
                    placeholder="Encuentra a tu héroe favorito"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value.toLowerCase());
                    }}
                />
            </form>
            {query && <HeroesList
                        value={query}
            />}
            
        </div>
    )
}

export default SearchHeroe
