import '../reset.css'
import './header.css'

import UserDropdown from './userDropdown'
import CartDropdown from './cartDropdown'
import MobileHamburger from './mobileHamburger'

import type { FC } from 'react' // FC = Functional Component

const Header: FC = () => {
    return (
        <div className="headerMain">

            <h1 className="storeName">Pawgo</h1>

            {/* TODO: search bar */}

            <div className="iconsContainer">
                <UserDropdown />
                <CartDropdown />
            </div>

            {/* mobile hamburger */}
            <div className="mobileIconsContainer">
                <MobileHamburger />
            </div>

        </div>
    );
};

export default Header