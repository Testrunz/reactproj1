import { useContext } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
export const ForgotPasswdForm = (props) => {
  const { switchToSignin } = useContext(AccountContext);
  return (
    <BoxContainer>
      <FormContainer>
        <Input
          style={{ width: 240, marginBottom: 20 }}
          type="email"
          placeholder="Email"
        />
      </FormContainer>
      <SubmitButton type="submit">Proceede</SubmitButton>
      <MutedLink href="#" style={{ marginTop: 20, marginBottom: 20 }}>
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
