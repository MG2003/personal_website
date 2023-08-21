export interface projData{
    title: string;
    category: string;
    path: string;
    link: string;
    desc: string;
    tags: string[];
}

export const projects: projData[] = [
    {
        title: "Kebash!",
        category: "Games",
        path: "kebash.png",
        link: "https://brownrisdgames.itch.io/kebash",
        desc: "blah blah blah",
        tags: ["hi", "does this work", "unity"]
    },
    {
        title: "US(F)PS",
        category: "Games",
        path: "usfps.png",
        link: "https://brownrisdgames.itch.io/usfps",
        desc: "usfps description",
        tags: ["fun!", "unreal", "unity"]
    },
    {
        title: "Focus Campfire",
        category: "Hackathons",
        path: "Fire3.gif",
        link: "https://devpost.com/software/focus-campfire",
        desc: "stuf",
        tags: ["HTML/CSS/Javascript"]
    }

]
