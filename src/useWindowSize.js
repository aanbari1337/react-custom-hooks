import React from "react";
import useEventListener from "./useEventListener";

const IS_MOBILE = "IS_MOBILE";
const IS_TABLET = "IS_TABLET";
const IS_DESKTOP = "IS_DESKTOP";
const IS_HD = "IS_HD";

const initialState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
  isHD: false,
};
const windowSizeReducer = (state, action) => {
  state = initialState;
  switch (action.type) {
    case IS_MOBILE:
      return { ...state, isMobile: true };
    case IS_TABLET:
      return { ...state, isTablet: true };
    case IS_DESKTOP:
      return { ...state, isDesktop: true };
    case IS_HD:
      return { ...state, isHD: true };
    default:
      return state;
  }
};
const windowMatch = (media) => {
  return window.matchMedia(media).matches;
};

const useWindowSize = () => {
  const [state, dispatch] = React.useReducer(windowSizeReducer, initialState);

  const setSize = React.useCallback(() => {
    const { isMobile, isTablet, isDesktop, isHD } = state;
    if (!isMobile && windowMatch("(min-width: 600px) and (max-width: 768px)"))
      return dispatch({ type: IS_MOBILE });
    if (!isTablet && windowMatch("(min-width: 768px) and (max-width: 992px)"))
      return dispatch({ type: IS_TABLET });
    if (!isDesktop && windowMatch("(min-width: 992px) and (max-width: 1200px)"))
      return dispatch({ type: IS_DESKTOP });
    if (!isHD && windowMatch("(min-width: 1200px)"))
      return dispatch({ type: IS_HD });
  }, []);

  useEventListener("resize", setSize);

  React.useEffect(setSize, []);

  return state;
};

export default useWindowSize;
