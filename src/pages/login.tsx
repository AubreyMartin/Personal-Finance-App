import { FormEvent, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Replace this with real authentication logic.
    console.log("Sign in attempt", { email, password, remember });
  };

  return (
    <div className="page login-page">
      <div className="auth-card">
        <div className="auth-header">
          <img
            src="/assets/images/illustration-authentication.svg"
            alt="Login Illustration"
            className="login-illustration"
          />
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <label className="field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <label className="checkbox">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
            />
          </label>
          <button type="submit" className="primary-button">
            Login
          </button>

          <p>Need an account?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
