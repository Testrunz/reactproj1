import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {reducers} from './mainreducers';
const resetStoreActionType = 'main/resetStore';

const combinedReducer = combineReducers(reducers);
export const rootReducer = (state, action) => {  
  if (action.type === resetStoreActionType) {
    state = undefined;
  }  
  return combinedReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export const resetStore = () => {
  store.dispatch({type: resetStoreActionType});
};

export default store;
