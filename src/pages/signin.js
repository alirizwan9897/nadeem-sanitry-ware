export default function Signin() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h1>Login</h1>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
