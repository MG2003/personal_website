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
        desc: "Multiplayer party game",
        tags: ["Unity", "C#"]
    },
    {
        title: "US(F)PS",
        category: "Games",
        pagepath: "usfps",
        imgpath: "usfps.png",
        link: "https://brownrisdgames.itch.io/usfps",
        desc: "Procedurally generated FPS autorunner",
        tags: ["Unreal Engine"]
    },
    {
        title: "Focus Campfire",
        category: "Hackathons",
        pagepath: "focuscampfire",
        imgpath: "Fire3.gif",
        link: "https://devpost.com/software/focus-campfire",
        desc: "Google extension for managing productivity, built for Hack@Brown 2023",
        tags: ["HTML/CSS/Javascript", "Chrome API"]
    }

]
