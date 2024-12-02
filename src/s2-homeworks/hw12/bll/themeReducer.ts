const initState = {
  themeId: 1,
};

export const themeReducer = (state = initState, action: ThemeAction): ThemeState => {
  // fix any
  switch (action.type) {
    case 'SET_THEME_ID': {
      return {
        ...state,
        themeId: action.id,
      };
    }

    default:
      return state;
  }
};
type ThemeAction = {
  type: 'SET_THEME_ID';
  id: number;
};

export type ThemeState = {
  themeId: number;
};
export const changeThemeId = (id: number): ThemeAction => ({ type: 'SET_THEME_ID', id }); // fix any
