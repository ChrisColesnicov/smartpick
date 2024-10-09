import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Smartpick !</h1>
      <Link to="/phones">Browse and compare</Link>
      <Link to="/admin">Admin Panel</Link>
    </div>
  );
}
