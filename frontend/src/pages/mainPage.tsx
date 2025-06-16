import '../reset.css'

import { useEffect } from "react"
import Header from '../components/header'

function Main() {
    useEffect(() => {
        document.title = 'Pawgo - Online Petstore'; // change tab
    }, []);

    return (
        <div>
            <Header />

        </div>
    )
}

export default Main