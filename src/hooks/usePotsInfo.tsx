import { useEffect, useState } from "react";

type Pot = {
    name: string;
    total: number;
};

export function usePotsInfo() {
    const [pots, setPots] = useState<Pot[]>([]);
    const [totalSaved, setTotalSaved] = useState<number>(0);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => {
                setPots(data.pots);
                setTotalSaved(
                    data.pots.reduce(
                        (acc: number, pot: Pot) => acc + pot.total,
                        0
                    )
                );
            })
            .catch((error) => {
                console.error("Failed to load pots data", error);
            });
    }, []);

    return { pots, totalSaved };
}
