import { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import axios from "axios";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const signupAction = async ()=>{
    await axios.post("http://3.18.225.145:7000/api/user", {
        email: "",
        password: "",
        name: ""
      });
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="text"
          placeholder="Full Name"
        />
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="email"
          placeholder="Email"
        />
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="password"
          placeholder="Password"
        />
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="password"
          placeholder="Confirm Password"
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#" style={{marginBottom: 20}}>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
