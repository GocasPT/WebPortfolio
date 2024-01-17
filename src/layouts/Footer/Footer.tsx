import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

// TODO: Complete the html structure
// TODO: Add styling
export const Footer = () => {
  return (
    <div>
      <h1>Footer</h1>
      <h2>Social Media</h2>
      <ul>
        <li>
          <FaGithub />
        </li>
        <li>
          <FaLinkedin />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
      </ul>
    </div>
  );
};
