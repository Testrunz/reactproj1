import React from "react";
import { Box, Typography, useTheme, Button } from "@mui/material";
import { tokens } from "../../utilities/theme/theme";
import { useFormik } from "formik";
import SvgUpload from "../../icons/SvgUpload";
import { isEmpty } from "../../utilities/helpers";
import { useDispatch } from "react-redux";
import { feedbackMiddleWare } from "./store/supportMiddleware";
import { USER_DATA } from "../../utilities/localStorageConstants";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { toast } from "react-toastify";

const FeedBackTab = ({ setLoader }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (isEmpty(values.category)) {
      errors.category = "Category field is required";
    }
    if (isEmpty(values.feedback)) {
      errors.feedback = "Feedback field is required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      category: "",
      imageUrl: "",
      file: "",
      feedback: "",
    },
    onSubmit: (value) => handleSubmit(value),
    validate,
  });

  const handleSubmit = (values) => {
    setLoader(true);
    let userData = localStorage.getItem(USER_DATA);
    userData = JSON.parse(userData);
    dispatch(
      feedbackMiddleWare({
        feedback: values.feedback,
        image: values.imageUrl,
        postedby: userData?.user?.email,
        type: values.category,
      })
    )
      .then((res) => {
        setLoader(false);
        toast.error(res.payload.message);
        // formik.resetForm();
      })
      .catch(() => {
        setLoader(false);
      });
  };

  const handleImageChange = (e) => {
    formik.setFieldValue("file", e.target.files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = async () => {
      const base64Image = reader.result.split(",")[1];
      try {
        formik.setFieldValue(
          "imageUrl",
          "data:image/jpeg;base64," + base64Image
        );
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    };
  };

  return (
    <Box m="30px">
      <Typography
        mb="8px"
        variant="h3"
        color={colors.grey[100]}
        fontWeight="bold"
      >
        Send us some feedback!
      </Typography>
      <Typography mb="20px" variant="h6">
        Let us know what we're getting right and what we can improve
      </Typography>
      <Typography fontWeight={"bold"} variant="h5">
        Category
      </Typography>
      <Box mt="16px" display={"flex"} flexDirection={"row"} alignItems="center">
        <Box display={"flex"} flexDirection={"row"} alignItems="center">
          <input
            onChange={() => formik.setFieldValue("category", "bug")}
            checked={formik.values.category === "bug"}
            style={{ margin: "0", cursor: "pointer" }}
            type="radio"
            id="flexRadioDefault1"
          />
          <Typography ml="12px" variant="h6">
            Bug
          </Typography>
        </Box>
        <Box
          ml="20px"
          mr={"20px"}
          display={"flex"}
          flexDirection={"row"}
          alignItems="center"
        >
          <input
            onChange={() => formik.setFieldValue("category", "features")}
            checked={formik.values.category === "features"}
            style={{ margin: "0", cursor: "pointer" }}
            type="radio"
            id="flexRadioDefault1"
          />
          <Typography ml="12px" variant="h6">
            Features
          </Typography>
        </Box>
        <Box display={"flex"} flexDirection={"row"} alignItems="center">
          <input
            onChange={() => formik.setFieldValue("category", "others")}
            checked={formik.values.category === "others"}
            style={{ margin: "0", cursor: "pointer" }}
            type="radio"
            id="flexRadioDefault1"
          />
          <Typography ml="12px" variant="h6">
            Others
          </Typography>
        </Box>
      </Box>
      <ErrorMessage
        name={"category"}
        touched={formik.touched}
        errors={formik.errors}
      />
      <Box mt={"20px"}>
        <textarea
          style={{ width: "80%", padding: 12 }}
          class="form-control"
          rows="10"
          placeholder="Write your feedback..."
          value={formik.values.feedback}
          onChange={(e) => {
            formik.setFieldValue("feedback", e.target.value);
          }}
        />
      </Box>
      <ErrorMessage
        name={"feedback"}
        touched={formik.touched}
        errors={formik.errors}
      />
      <Typography marginTop={"12px"} mb="12px" variant="h5" fontWeight={"bold"}>
        Upload your feedback
      </Typography>
      <Box display={"flex"} flexDirection={"row"} alignItems="center">
        <label htmlFor="image">
          <div style={{ paddingLeft: 40 }}>
            {isEmpty(formik.values.imageUrl) ? (
              <SvgUpload width={250} height={200} />
            ) : (
              <img
                style={{
                  height: 200,
                  width: 250,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
                src={formik.values.imageUrl}
                alt="Uploaded file"
              />
            )}
          </div>
        </label>
        <Box ml={"30px"}>
          <label htmlFor="image">
            <Typography
              fontWeight={"bold"}
              style={{
                border: `1px solid`,
                borderColor: colors.primary,
                padding: "8px 12px",
                borderRadius: 4,
                cursor: "pointer",
              }}
              color={colors.primary}
            >
              Upload Image
            </Typography>
          </label>
        </Box>
      </Box>
      <input
        style={{ display: "none" }}
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
      <Box mt="30px" mb="40px">
        <Button variant="contained" onClick={formik.handleSubmit}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default FeedBackTab;
