import { auth, provider } from "../utilities/firebase/firebase";
import { useNavigate } from "react-router-dom";
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
    <button onClick={(e)=>handlerGoogleSignIn(e)}>GoogleSignIn</button>
  )
}

export default GoogleSignIn