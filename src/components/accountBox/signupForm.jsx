import { useContext, useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
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
import { isEmpty, isValidEmail } from "../../utilities/helpers";
import { Box } from "@mui/material";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { signinMiddleWare } from "./store/loginMiddleware";
import Loader from "../Loader/Loader";

export function SignupForm() {
  const { switchToSignin } = useContext(AccountContext);
  const dispatch = useDispatch();
  const [isLoader, setLoader] = useState();

  const validate = (values) => {
    const errors = {};
    if (isEmpty(values.name)) {
      errors.name = "Name field is required";
    } else if (values.name.length <= 2) {
      errors.name = "Invalid name entered";
    }
    if (isEmpty(values.email)) {
      errors.email = "Email field is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email entered";
    }
    if (isEmpty(values.password)) {
      errors.password = "Password field is required";
    } else if (values.password.length <= 8) {
      errors.password = "Passwords must be at least eight characters";
    }

    if (isEmpty(values.password)) {
      errors.password = "Password field is required";
    } else if (values.password.length <= 8) {
      errors.password = "Passwords must be at least eight characters";
    }
    if (isEmpty(values.confirmPassword)) {
      errors.confirmPassword = "Confirm password field is required";
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "You are entering the wrong password.";
    }
    return errors;
  };

  const signupAction = (value, helper) => {
    setLoader(true);
    dispatch(
      signinMiddleWare({
        name: value.name,
        email: value.email,
        password: value.password,
      })
    )
      .then((res) => {
        if (res.payload?.success) {
          helper.resetForm();
        }
        setLoader(false);
      })
      .catch(() => {
        setLoader(false);
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: signupAction,
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
              type="text"
              placeholder="Full Name"
              value={formik.values.name}
              onChange={formik.handleChange("name")}
            />
            <ErrorMessage
              name={"name"}
              touched={formik.touched}
              errors={formik.errors}
            />
          </Box>

          <Box mb="20px" flexDirection={"column"} display="flex">
            <Input
              style={{ width: 240 }}
              type="email"
              placeholder="Email"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
            />
            <ErrorMessage
              name={"email"}
              touched={formik.touched}
              errors={formik.errors}
            />
          </Box>
          <Box mb="20px" flexDirection={"column"} display="flex">
            <Input
              style={{ width: 240 }}
              type="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange("password")}
            />
            <ErrorMessage
              name={"password"}
              touched={formik.touched}
              errors={formik.errors}
            />
          </Box>
          <Box mb="20px" flexDirection={"column"} display="flex">
            <Input
              style={{ width: 240 }}
              type="password"
              placeholder="Confirm Password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange("confirmPassword")}
            />
            <ErrorMessage
              name={"confirmPassword"}
              touched={formik.touched}
              errors={formik.errors}
            />
          </Box>
        </FormContainer>
        <Marginer direction="vertical" margin={10} />
        <SubmitButton type="submit" onClick={formik.handleSubmit}>
          Signup
        </SubmitButton>
        <Marginer direction="vertical" margin="1em" />
        <MutedLink href="#" style={{ marginBottom: 20 }}>
          Already have an account?
          <BoldLink href="#" onClick={switchToSignin}>
            Signin
          </BoldLink>
        </MutedLink>
      </BoxContainer>
    </>
  );
}
