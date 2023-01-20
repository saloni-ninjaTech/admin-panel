import * as constants from "../_helpers/constants";
// action creator

export const setDisplayDashboard = (isDisplay) => (dispatch) => {
  try {
    dispatch({ type: constants.DISPLAY_DASHBOARD, payload: isDisplay });
  } catch (error) {
    console.log("error:", error);
  }
};

export const setDisplayCategories = (isDisplay) => (dispatch) => {
  try {
    dispatch({ type: constants.DISPLAY_CATEGORIES, payload: isDisplay });
  } catch (error) {
    console.log("error:", error);
  }
};

export const setDisplayProfile = (isDisplay) => (dispatch) => {
  try {
    dispatch({ type: constants.DISPLAY_PROFILE, payload: isDisplay });
  } catch (error) {
    console.log("error:", error);
  }
};
