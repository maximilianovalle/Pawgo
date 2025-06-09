import { useEffect } from "react"

function Test() {
    useEffect(() => {
        document.title = 'Test'; // change tab
    }, []);

    return <p>Testing!</p>
}

export default Test