import '../reset.css'
import './dropdown.css'

import type { FC } from 'react'

import { FaUser } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"
import { FaChevronDown } from "react-icons/fa"

const UserDropdown: FC = () => {
    return (
        <button className='dropdownBtn' aria-haspopup='true'>
            <FaUser />
            <FaChevronRight className='userRightArrow'/>
            <FaChevronDown className='userDownArrow'/>
        </button>
    )
}

export default UserDropdown