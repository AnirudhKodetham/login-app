const initialState = {
    loginStatus: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          loginStatus: 'success',
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          loginStatus: 'failure',
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  