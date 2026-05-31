export default function Signup() {
  return (
    <div className="auth-container">
      <form className="auth-form">
        <h1>Create Account</h1>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
