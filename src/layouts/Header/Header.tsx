import { NavLink } from "react-router-dom";
import { Btn } from "@/components/Button";
import { Pages } from "@/pages";
import "@/assets/Header.css"

// TODO: Complete the html structure
// TODO: Add styling
export const Header = () => {
  return (
    <div className="header">
      <ul className="list">
        {Pages.map((page) => {
          return (
            <li key={page.name}>
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
    </div>
  );
};
