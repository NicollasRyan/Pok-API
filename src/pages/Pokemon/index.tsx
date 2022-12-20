import { Link } from "react-router-dom";

export function Pokemon() {
  return (
    <div>
      <h1>Hello Word</h1>
      <Link to={`/`}>Dashbord</Link>
    </div>
  );
}
