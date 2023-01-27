import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utilities/firebase/firebase";
import styles from "./SignIn.module.css";
import GoogleSignIn from "../../components/GoogleSignIn"
const SignIn = () => {
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
        <title>Testrunz - Signin Page</title>
        <meta property="og:title" content="Signin Page" />
      </Helmet>
      <div className={styles["auth-form-container"]}>
        <h2>Login</h2>
        <form className={styles["login-form"]} onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email here..."
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
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              auth
                .signInWithEmailAndPassword(email, pass)
                .then((data) => {
                  console.log(data);
                  navigate("/dashboard");
                })
                .catch((err) => {
                  console.error(err);
                });
            }}
          >
            Log In
          </button>
        </form>
        <GoogleSignIn />
        <button
          className={styles["link-btn"]}
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Don't have an account? Register here.
        </button>
      </div>
    </div>
  );
};

export default SignIn;
