import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <section className="signin-container">
      <form onSubmit={handleSubmit}>
        <section className="login-form-fields">
          <h1 className="login-title">Log into your account</h1>
          <div className="login-form-group">
            <label htmlFor="email">Mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Saisissez votre adresse email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="login-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Saisissez votre mot de passe"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </section>
      </form>
    </section>
  );
}
