import { useContext, useState } from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  BoldLink,
  SubmitButton,
} from "./common";
import { AccountContext } from "./accountContext";
import { useFormik } from "formik";
import { isEmpty, isValidEmail } from "../../utilities/helpers";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { Box } from "@mui/material";
import { auth } from "../../utilities/firebase/firebase";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";

export const ForgotPasswdForm = () => {
  const { switchToSignin } = useContext(AccountContext);
  const [isLoader, setLoader] = useState(false);
  const validate = (values) => {
    const errors = {};
    if (isEmpty(values.email)) {
      errors.email = "Email field is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email entered";
    }

    return errors;
  };

  const handleSubmit = (value, formikHelper) => {
    setLoader(true);
    auth
      .sendPasswordResetEmail(value.email)
      .then(() => {
        formikHelper.resetForm();
        toast.success("Password reset successfully");
        setLoader(false);
        switchToSignin()
      })
      .catch((error) => {
        toast.error(error?.message);
        setLoader(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <>
      {isLoader && <Loader />}
      <BoxContainer>
        <FormContainer>
          <Box mb="20px" flexDirection={"column"} display="flex">
            <Input
              style={{ width: 240 }}
              type="email"
              placeholder="Email"
              onChange={formik.handleChange("email")}
              value={formik.values.email}
            />
            <ErrorMessage
              name={"email"}
              touched={formik.touched}
              errors={formik.errors}
            />
          </Box>
        </FormContainer>
        <SubmitButton type="submit" onClick={formik.handleSubmit}>
          Proceede
        </SubmitButton>
        <MutedLink href="#" style={{ marginTop: 20, marginBottom: 20 }}>
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
};
