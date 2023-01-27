import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SignUp.module.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <Helmet>
        <title>Testrunz - Signup Page</title>
        <meta property="og:title" content="Signup Page" />
      </Helmet>
      <div className={styles["auth-form-container"]}>
        <h2>Register</h2>
        <form className={styles["register-form"]} onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="mail here ..."
            id="email"
            name="email"
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <button type="submit">Sign up</button>
        </form>
        <button
          className={styles["link-btn"]}
          onClick={(e) => {
            e.preventDefault();
            navigate("/signin");
          }}
        >
          Already have an account? Login here.
        </button>
      </div>
    </div>
  );
};

export default SignUp;
