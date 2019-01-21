import * as types from './types';

const initialState = {
  all_devices: [],
  available_devices: [],
  operating_system: "all ops",
  loading: false,
  error: false
};

function Reducer(state = JSON.parse(JSON.stringify(initialState)), action) {
  switch (action.type) {
    case types.OP_SELECT: {
      const newState = Object.assign({}, state);
      newState.operating_system = action.payload;
      return newState;
    }
    case types.DEVICES_GET.REQUEST: {
      const newState = Object.assign({}, state);
      newState.loading = true;
      return newState;
    }
    case types.DEVICES_GET.SUCCESS: {
      const newState = Object.assign({}, state);
      newState.loading = false;
      newState.all_devices = action.payload;
      return newState;
    }
    case types.DEVICES_GET.FAILURE: {
      const newState = Object.assign({}, state);
      newState.loading = false;
      newState.error = true;
      return newState;
    }
    case types.AVAILABILITY_GET.SUCCESS: {
      const newState = Object.assign({}, state);
      newState.available_devices = action.payload;
      return newState;
    }
    case types.AVAILABILITY_GET.FAILURE: {
      const newState = Object.assign({}, state);
      newState.error = true;
      return newState;
    }
    default:
      return state;
  }
};

export default Reducer;
