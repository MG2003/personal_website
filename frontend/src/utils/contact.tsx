//react-icons
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";


const iconClass: string = "fill-secondary hover:fill-darkbg"
const size: Number = 20

export const contacts:  { icon: JSX.Element, url: string}[] = [
    {
        icon: <AiFillLinkedin alt = 'linkedin' size = {size} className = {iconClass}/>,
        url: "https://www.linkedin.com/in/max-guo-3b0b1b20b/"
    },
    {
        icon: <AiFillGithub alt = 'github' size = {size}  className = {iconClass}/>,
        url: "https://github.com/MG2003"
    },
    {
        icon: <AiOutlineTwitter alt = 'twitter' size = {size}  className = {iconClass}/>,
        url:  "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
]