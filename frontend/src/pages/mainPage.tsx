import { useEffect } from "react"

function Main() {
    useEffect(() => {
        document.title = 'Pawgo - Online Petstore'; // change tab
    }, []);

    return (
        <>
        </>
    )
}

export default Main