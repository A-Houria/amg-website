import { Link } from "react-router-dom";
const NoMatch = () => {
  return (
    <div className="nomatch">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="home-btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
