import { auth, provider } from "../utilities/firebase/firebase";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import {
  loginMiddleWare,
  validateUserMiddleWare,
} from "./accountBox/store/loginMiddleware";
import { USER_DATA } from "../utilities/localStorageConstants";

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
          loginMiddleWare({ email: result.user?.multiFactor?.user?.email })
        )
          .then((loginRes) => {
            dispatch(
              validateUserMiddleWare({ usertoken: loginRes.payload?.jwttoken })
            )
              .then((validateRes) => {
                localStorage.setItem(
                  USER_DATA,
                  JSON.stringify(validateRes.payload)
                );
                setLoader(false);
                navigate("/dashboard");
              })
              .catch(() => {
                setLoader(false);
              });
          })
          .catch(() => {
            setLoader(false);
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
