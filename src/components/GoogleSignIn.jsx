import { auth, provider } from "../utilities/firebase/firebase";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { googleSignInMiddleWare } from "./accountBox/store/loginMiddleware";
import { TOKEN } from "../utilities/localStorageConstants";
import axios from "axios";
import { authMeMiddleWare } from "../appScenes/myPage/store/mypageMiddleware";

const SubmitButton = styled.button`
  width: 80%;
  padding: 11px 0;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;

const GoogleSignIn = ({ setLoader }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerGoogleSignIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch(
          googleSignInMiddleWare({
            email: result.user?.multiFactor?.user?.email,
            name: result.user?.multiFactor?.user?.displayName,
            uid: result.user?.multiFactor?.user?.uid,
          })
        ).then((res) => {
          if (res.payload.success) {
            localStorage.setItem(
              TOKEN,
              JSON.stringify(result.user?.multiFactor?.user?.accessToken)
            );
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${result.user?.multiFactor?.user?.accessToken}`;

            dispatch(authMeMiddleWare())
              .then(() => {
                setLoader(false);
                navigate("/dashboard");
              })
              .catch(() => {
                setLoader(false);
              });
          }
        });
      })
      .catch(() => {
        setLoader(false);
      });
  };
  return (
    <SubmitButton onClick={(e) => handlerGoogleSignIn(e)}>
      GoogleSignIn
    </SubmitButton>
  );
};

export default GoogleSignIn;
