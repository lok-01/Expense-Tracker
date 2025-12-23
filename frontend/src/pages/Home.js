import { Link } from "react-router-dom";
import "../styles/auth.css";

export default function Home() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Expense Tracker</h2>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
        <br /><br />
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}
