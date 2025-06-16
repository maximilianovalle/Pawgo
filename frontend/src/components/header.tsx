import './header.css'
import '../reset.css'

import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6"
import { FaChevronDown } from "react-icons/fa"

import { IoMenu } from "react-icons/io5";

function Header() {
    return (
        <div className="main">

            <h1 id="storeName">Pawgo</h1>

            {/* search bar */}

            <div id="iconsContainer">
                <div className='headerIcon'>
                    <FaUser />
                    <FaChevronDown />
                </div>

                <div className='headerIcon'>
                    <FaCartShopping />
                    <FaChevronDown />
                </div>
            </div>

            <div id="mobileIconsContainer">
                <div className='headerIcon'>
                    <IoMenu />
                </div>
            </div>

        </div>
    )
}

export default Header