import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../utilities/firebase/firebase";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import GoogleSignIn from "../GoogleSignIn";

export function LoginForm(props) {
  const navigate = useNavigate();

  const { switchToSignup, switchToForgotPass } = useContext(AccountContext);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handlerSignIn = (e) => {
    e.preventDefault();
    const { email, password } = data;
    auth.signInWithEmailAndPassword(email, password).then(() => {
      navigate("/dashboard");
    });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setData((data) => ({ ...data, email: e.target.value }))
          }
        />
        <Input
          style={{ width: 240 }}
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData((data) => ({ ...data, password: e.target.value }))
          }
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" onClick={switchToForgotPass}>
        Forget your password?
      </MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={(e) => handlerSignIn(e)}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1.6em" />
      <GoogleSignIn />
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Don't have an accoun? </MutedLink>
      <BoldLink href="#" onClick={switchToSignup} style={{marginBottom: 20,marginTop: 10}}>
        Signup
      </BoldLink>
    </BoxContainer>
  );
}
