import * as enums from "../helpers/enums";

const INITIAL_STATE = {
  isLoading: true,
  newLineLoading: false,
  compressData: [],
  counter: 0,
};

const compressReducer = (state = INITIAL_STATE, action) => {
 
  switch (action.type) {
    default:
      return state;
  }
};

export default compressReducer;
