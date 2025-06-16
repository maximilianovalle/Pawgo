import '../reset.css'
import './dropdown.css'

import type { FC } from 'react'

import { IoMenu } from "react-icons/io5"

const MobileHamburger: FC = () => {
    return (
        <button className='dropdownBtnHamburger' aria-haspopup='true'>
            <IoMenu />
        </button>
    )
}

export default MobileHamburger