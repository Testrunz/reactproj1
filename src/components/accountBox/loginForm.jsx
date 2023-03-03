import { useContext, useEffect, useState } from "react";
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
import { TOKEN } from "../../utilities/localStorageConstants";
import Loader from "../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { authMeMiddleWare } from "../../appScenes/myPage/store/mypageMiddleware";
import axios from "axios";
import { toast } from "react-toastify";

export function LoginForm() {
  const navigate = useNavigate();
  const { switchToSignup, switchToForgotPass } = useContext(AccountContext);
  const [isLoader, setLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem(TOKEN) !== null) {
      navigate("/dashboard");
    }
  }, []);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handlerSignIn = (e) => {
    e.preventDefault();
    setLoader(true);
    const { email, password } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("Login Successful");
        localStorage.setItem(
          TOKEN,
          JSON.stringify(res.user.multiFactor.user.accessToken)
        );
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.user.multiFactor.user.accessToken}`;
        dispatch(authMeMiddleWare())
          .then(() => {
            setLoader(false);
            navigate("/dashboard");
          })
          .catch(() => {
            setLoader(false);
          });
      })
      .catch((error) => {
        toast.error(error.message);
        setLoader(false);
      });
  };

  return (
    <>
      {isLoader && <Loader />}
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
        <GoogleSignIn setLoader={setLoader} />
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#">Don't have an accoun? </MutedLink>
        <BoldLink
          href="#"
          onClick={switchToSignup}
          style={{ marginBottom: 20, marginTop: 10 }}
        >
          Signup
        </BoldLink>
      </BoxContainer>
    </>
  );
}
