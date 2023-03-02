import {
  experimentsReducers,
  authMeReducers,
} from "../appScenes/myPage/store/mypageReducers";
import { experimentsRunzReducers } from "../appScenes/runz/store/runzReducer";
import { moreInfoReducers } from "../appScenes/procedure/store/procedureReducer";
import { getaccessReducers } from "../appScenes/setting/store/settingReducer";

export const reducers = {
  experimentsReducers,
  experimentsRunzReducers,
  moreInfoReducers,
  getaccessReducers,
  authMeReducers,
};
