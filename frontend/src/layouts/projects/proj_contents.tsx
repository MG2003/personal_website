export interface projData{
    title: string;
    path: string;
    link: string;
    desc: string;
    tags: string[];
}

export const games: projData[] = [
    {
        title: "Kebash!",
        path: "kebash.png",
        link: "https://brownrisdgames.itch.io/kebash",
        desc: "blah blah blah",
        tags: ["hi", "does this work"]
    },
    {
        title: "US(F)PS",
        path: "usfps.png",
        link: "https://brownrisdgames.itch.io/usfps",
        desc: "usfps description",
        tags: ["fun!"]
    }

]