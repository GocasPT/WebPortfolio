import { IconComponent } from "@/utils/IconComponent";
import Socials from "@/data/SocialLinks.json";
import Wave from "react-wavify"
import "@/assets/Footer.css"

// TODO: Complete the html structure
// TODO: Add styling
export const Footer = () => {
  return (
    <div className="footer section">
      <Wave fill="url(#gradientFooter)" style={{ display: 'flex' }}
        options={{
          height: 30,
          amplitude: 25,
          speed: 0.10,
          points: 5
        }}
      >
          <defs>
            <linearGradient id="gradientFooter" gradientTransform="rotate(90)">
              <stop offset="0" stopColor="var(--blue-dark)" />
              <stop offset="1" stopColor="var(--blue-light)" />
            </linearGradient>
          </defs>
        </Wave>

      <h2 className="footer-title">Social Media</h2>

      <ul className="footer-list">
        {Socials.map((social) => {
          const IconRender = IconComponent(social.name);
          return (
            <li key={social.name} className="footer-list-item">
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
