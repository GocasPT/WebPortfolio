import { IconComponent } from "@/utils/IconComponent";
import Socials from "@/data/SocialLinks.json";
import "@/assets/Footer.css"

// TODO: Complete the html structure
// TODO: Add styling
export const Footer = () => {
  return (
    <div className="footer">
      <h2 className="title">Social Media</h2>
      <ul className="list">
        {Socials.map((social) => {
          const IconRender = IconComponent(social.name);
          return (
            <li key={social.name}>
              <a href={social.link} target="_blanck">
                <IconRender />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
