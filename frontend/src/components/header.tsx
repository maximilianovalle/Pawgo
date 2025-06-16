import '../reset.css'
import './header.css'

import SearchBar from './searchBar'
import UserDropdown from './iconButtons/userDropdown'
import CartDropdown from './iconButtons/cartDropdown'
import MobileHamburger from './iconButtons/mobileHamburger'

import type { FC } from 'react' // FC = Functional Component

const Header: FC = () => {
    return (
        <div className="headerMain">

            <h1 className="storeName">Pawgo</h1>

            {/* search bar */}
            <SearchBar />

            {/* icons */}
            <div className="iconsContainer">
                <UserDropdown />
                <CartDropdown />
            </div>

            {/* TODO: mobile search */}

            {/* mobile hamburger */}
            <div className="mobileIconsContainer">
                <MobileHamburger />
            </div>

        </div>
    );
};

export default Header