import { NavLink } from "react-router-dom";
import { Btn } from "@/components/Button";
import Wave from "react-wavify"
import { Pages } from "@/pages";
import "@/assets/Header.css"

// TODO: Complete the html structure
// TODO: Add styling
export const Header = () => {
  return (
    <div className="header section">
      <ul className="header-list">
        {Pages.map((page) => {
          return (
            <li key={page.name} className="header-list-item">
              <NavLink
                to={page.path}
                className={({ isActive}) => 
                  isActive ? "active-link" : ""
                }
              >
                <Btn.Root>
                  <Btn.Text text={page.name} />
                </Btn.Root>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <Wave fill="url(#gradientHeader)" style={{ display: 'flex' }}
        options={{
          height: 30,
          amplitude: 25,
          speed: 0.10,
          points: 5
        }}
      >
        <defs>
          <linearGradient id="gradientHeader" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="var(--blue-light)" />
            <stop offset="1" stopColor="var(--blue-dark)" />
          </linearGradient>
        </defs>
      </Wave>
    </div>
  );
};
