import '../reset.css'
import './searchBar.css'

import type { FC } from 'react'

const SearchBar: FC = () => {
    return (
        <div className='searchBar'>
            <input type="search" placeholder='Search...'/>
        </div>
    )
}

export default SearchBar