import '../reset.css'

import { useEffect } from "react"

import Header from '../components/header/header'

function Main() {
    useEffect(() => {
        document.title = 'Home | Pawgo'; // change tab
    }, []);

    return (
        <div>
            <Header />
        </div>
    )
}

export default Main

// white: #fff7f5
// light orange: #ff6742
// dark orange: #ff5f37
// brown: #8d2207