export default function Register() {
  return (
    <div className="auth-page">
      <form className="auth-card">
        <h1> สมัครสมาชิก </h1>
        <input placeholder="ชื่อ นามสกุล"  />
        <input placeholder="Email"  type="email" />
        <input placeholder="Password" type="password" />

        <button> Register </button>

      </form>
    </div>
  );
}
