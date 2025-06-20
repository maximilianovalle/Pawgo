import '../../reset.css'
import './searchBar.css'

import type { FC } from 'react'

import { IoSearch } from "react-icons/io5"

const SearchBar: FC = () => {
    return (
        <div className='searchBar'>
            <button><IoSearch /></button>
            <input type="search" placeholder='Dog toys'/>
        </div>
    )
}

export default SearchBar