import { fetchUrl } from "../utilities/config";

export const signUpApi = "https://api.testrunz.com/authapp/auth/register";
export const authMeApi = "https://api.testrunz.com/authapp/auth/me";
export const googleSignInApi =
  "https://api.testrunz.com/authapp/auth/googlelogin";

export const experimentsApi = fetchUrl("experiments/mypage");
export const experimentsRunzApi = (id) => {
  const result = fetchUrl(`experiments/runz/${id}`);
  return result;
};
export const moreInfoApi = fetchUrl("moreInfo");
export const getaccessApi = fetchUrl("api/getaccess");
export const feedbackApi = fetchUrl("api/feedback");
