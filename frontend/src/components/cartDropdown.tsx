import '../reset.css'
import './dropdown.css'

import type { FC } from 'react'

import { FaCartShopping } from "react-icons/fa6"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"

const UserDropdown: FC = () => {
    return (
        <button className='dropdownBtn' aria-haspopup='true'>
            <FaCartShopping />
            <FaChevronRight className='userRightArrow'/>
            <FaChevronDown className='userDownArrow'/>
        </button>
    )
}

export default UserDropdown