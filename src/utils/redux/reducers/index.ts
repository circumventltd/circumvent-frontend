import { combineReducers } from "redux";
import menumodals, { MenuModalState } from "../slices/menumodals";

export interface RootState {
  menuslice: MenuModalState;
}

const rootReducer = combineReducers<RootState>({
  menuslice: menumodals,
});

export default rootReducer;
