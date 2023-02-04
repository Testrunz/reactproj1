import { Helmet } from "react-helmet";
import styled from "@emotion/styled";
import { AccountBox } from "../../components/accountBox";
import styles from "./SignIn.module.css"

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignIn = () => {
  return (
    <div>
      <Helmet>
        <title>Testrunz - Signin or signup Page</title>
        <meta property="og:title" content="Signin Page or signup" />
      </Helmet>
      <div className={styles["auth-form-container"]}>
      <AppContainer>
        <AccountBox />
      </AppContainer>
      </div>
    </div>
  );
};

export default SignIn;
