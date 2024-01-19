import { Link } from "react-router-dom";
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
            <li>
              <Link to={page.path}>
                <Btn.Root>
                  <Btn.Text text={page.name} />
                </Btn.Root>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
