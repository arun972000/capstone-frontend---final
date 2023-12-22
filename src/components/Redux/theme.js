const initialState = {
    isDark: false,
   
  }
  
  function ThemeReducer(state = initialState, action) {
  
    switch (action.type) {
  
      case 'Dark':
        return {
          ...state,
          isDark: true, 
        }
      case 'light':
        return {
          ...state,
          isDark: false,
        }
      default:
        return state;
    }
  
  }
  
  export default ThemeReducer;