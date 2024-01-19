import { FaClock, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillGoogleCircle, AiFillInstagram, AiFillFacebook } from "react-icons/ai";

type IconString = "Loading" | "Google" | "Github" | "LinkedIn" | "Instagram" | "Facebook";

const IconMap = {
    Loading: FaClock,
    Google: AiFillGoogleCircle,
    Github: FaGithub,
    LinkedIn: FaLinkedin,
    Instagram: AiFillInstagram,
    Facebook: AiFillFacebook
}

export const IconComponent = (icon: string) => {
    return IconMap[icon as IconString];
}   