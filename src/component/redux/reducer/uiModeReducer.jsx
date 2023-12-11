initState = {
  mode: "basic",
};

const uiModeReducer = (state = initState, action) => {
  switch (action.type) {
    case "basic": {
      const mode = action.payload;
      return {
        ...state,
        mode: mode,
      };
    }

    case "dark": {
      const mode = action.payload;
      d;

      return {
        ...state,
        mode: mode,
      };
    }

    default:
      return state;
  }
};

export default uiModeReducer;
