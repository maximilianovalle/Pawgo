import '../../reset.css'
import './header.css'

import { IoPawSharp } from "react-icons/io5"

import SearchBar from './searchBar'
import UserDropdown from '../iconButtons/userDropdown'
import CartDropdown from '../iconButtons/cartDropdown'
import MobileHamburger from '../iconButtons/mobileHamburger'

import type { FC } from 'react' // FC = Functional Component

const Header: FC = () => {
    return (
        <div className="headerMain">

            {/* store name */}
            <h1 className="storeName">Pawgo<IoPawSharp className='storeNameIcon'/></h1>

            {/* search bar */}
            <div className='searchBarContainer'>
                <SearchBar />
            </div>

            {/* icons */}
            <div className="iconsContainer">
                <UserDropdown />
                <CartDropdown />
            </div>

            {/* mobile icons */}
            <div className="mobileIconsContainer">
                <MobileHamburger />
            </div>

        </div>
    );
};

export default Header