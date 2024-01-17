import { Link } from "react-router-dom";

// TODO: Complete the html structure
// TODO: Add styling
export const Header = () => {
  return (
    <div>
      <h1>NabBar</h1>
      <Link to="/WebPortfolio/">Home</Link>
      <Link to="/WebPortfolio/Experience">Experience</Link>
      <Link to="/WebPortfolio/Projects">Projects</Link>
      <Link to="/WebPortfolio/Education">Education</Link>
      <Link to="/WebPortfolio/AboutMe">About Me</Link>
    </div>
  );
};
