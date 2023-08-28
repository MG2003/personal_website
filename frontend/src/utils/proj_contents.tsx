export interface projData{
    title: string;
    category: string;
    pagepath: string;
    imgpath: string;
    link: string;
    desc: string;
    tags: string[];
}

export const projects: projData[] = [
    {
        title: "Kebash!",
        category: "Games",
        pagepath: "kebash",
        imgpath: "kebash.png",
        link: "https://brownrisdgames.itch.io/kebash",
        desc: "blah blah blah",
        tags: ["hi", "does this work", "unity"]
    },
    {
        title: "US(F)PS",
        category: "Games",
        pagepath: "usfps",
        imgpath: "usfps.png",
        link: "https://brownrisdgames.itch.io/usfps",
        desc: "usfps description",
        tags: ["fun!", "unreal", "unity"]
    },
    {
        title: "Focus Campfire",
        category: "Hackathons",
        pagepath: "focuscampfire",
        imgpath: "Fire3.gif",
        link: "https://devpost.com/software/focus-campfire",
        desc: "stuf",
        tags: ["HTML/CSS/Javascript"]
    }

]
