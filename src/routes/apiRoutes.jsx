import { fetchUrl } from "../utilities/config";

export const loginApi = fetchUrl("api/login");
export const validateUserApi = fetchUrl("api/validateuser");

export const experimentsApi = fetchUrl("experiments/mypage");
export const experimentsRunzApi = (id) => {
  const result = fetchUrl(`experiments/runz/${id}`);
  return result;
};
export const moreInfoApi = fetchUrl("moreInfo");
export const getaccessApi = fetchUrl("api/getaccess");
