import { buildActions } from 'utils';

export const types = buildActions('application', [
  'ADD_DEVICE',
  'CONTROL_DEVICE',
  'CONTROL_DEVICE_FAILURE',
  'CONTROL_DEVICE_SUCCESS',
  'EDIT_DEVICE',
  'REMOVE_DEVICE',
  'SET_BRIGHTNESS',
  'SET_COLOR'
]);

const addDevice = (device) => ({
  type: types.ADD_DEVICE,
  device
});

const controlDevice = (hostname, settings) => ({
  type: types.CONTROL_DEVICE,
  hostname,
  settings
});

const controlDeviceFailure = (error) => ({
  type: types.CONTROL_DEVICE_FAILURE,
  error
});

const controlDeviceSuccess = () => ({
  type: types.CONTROL_DEVICE_SUCCESS
});

const editDevice = (hostname, device) => ({
  type: types.EDIT_DEVICE,
  hostname,
  device
});

const removeDevice = (hostname) => ({
  type: types.REMOVE_DEVICE,
  hostname
});

const setBrightness = (brightness) => ({
  type: types.SET_BRIGHTNESS,
  brightness
});

const setColor = (color) => ({
  type: types.SET_COLOR,
  color
});

export const actions = {
  addDevice,
  controlDevice,
  controlDeviceFailure,
  controlDeviceSuccess,
  editDevice,
  removeDevice,
  setBrightness,
  setColor
};

export const initialState = {
  brightness: 20,
  color: {
    r: 0,
    g: 0,
    b: 0
  },
  devices: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_DEVICE: {
      const existingDevice = state.devices.find(
        (device) => device.hostname === action.device.hostname
      );

      if (existingDevice) {
        return state;
      }

      return {
        ...state,
        devices: [...state.devices, action.device]
      };
    }
    case types.EDIT_DEVICE: {
      const newDevices = [...state.devices];
      const replaceIndex = state.devices.findIndex(
        (device) => device.hostname === action.hostname
      );

      if (replaceIndex === -1) {
        return state;
      }

      newDevices.splice(replaceIndex, 1, action.device);

      return {
        ...state,
        devices: newDevices
      };
    }
    case types.REMOVE_DEVICE: {
      const newDevices = [...state.devices];
      const replaceIndex = state.devices.findIndex(
        (device) => device.hostname === action.hostname
      );

      if (replaceIndex === -1) {
        return state;
      }

      newDevices.splice(replaceIndex, 1);

      return {
        ...state,
        devices: newDevices
      };
    }
    case types.SET_BRIGHTNESS:
      return {
        ...state,
        brightness: action.brightness
      };
    case types.SET_COLOR:
      return {
        ...state,
        color: action.color
      };
    default:
      return state;
  }
};
