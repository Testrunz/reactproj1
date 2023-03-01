import { fetchUrl } from "../utilities/config";

export const signup = fetchUrl("auth/register")
export const loginApi = fetchUrl("api/login");
export const validateUserApi = fetchUrl("api/validateuser");
export const signinApi='http://3.18.225.145:3000/auth/register'

export const experimentsApi = fetchUrl("experiments/mypage");
export const experimentsRunzApi = (id) => {
  const result = fetchUrl(`experiments/runz/${id}`);
  return result;
};
export const moreInfoApi = fetchUrl("moreInfo");
export const getaccessApi = fetchUrl("api/getaccess");
export const feedbackApi = fetchUrl("api/feedback");

