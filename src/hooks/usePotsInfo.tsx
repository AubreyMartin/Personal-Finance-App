import { useEffect, useState } from "react";

export function usePotsInfo() {
    const [pots, setPots] = useState([])
    const [totalsaved, setTotalSaved] = useState(0)

    useEffect(() => {
        fetch('/data.json')
            .then((res) => res.json())
            .then((data) => {
                setPots(data.pots)
                setTotalSaved(data.pots.reduce((acc, currentElement) => acc + currentElement.total, 0))





            })
            .catch((error) => {
                console.error('Failed to load transactions data', error);
            });
    }, []);
    return { pots, totalsaved }
}



