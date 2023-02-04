import { auth, provider } from "../utilities/firebase/firebase";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
const SubmitButton = styled.button`
  width: 80%;
  padding: 11px 40%;
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
const GoogleSignIn = () => {
    const navigate = useNavigate();
    const handlerGoogleSignIn = (e)=>{
        e.preventDefault();
        auth.signInWithPopup(provider).then((result)=>{
            console.log(result);
            navigate("/dashboard");
        }).catch((err)=>{
            console.error(err);
        })
    }
  return (
    <SubmitButton onClick={(e)=>handlerGoogleSignIn(e)}>GoogleSignIn</SubmitButton>
  )
}

export default GoogleSignIn