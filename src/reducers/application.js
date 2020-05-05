import { buildActions } from 'utils';

export const types = buildActions('application', [
  'ADD_DEVICE',
  'APPEND_NETWORK_LOG',
  'CLEAR_NETWORK_LOG',
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

const appendNetworkLog = (message) => ({
  type: types.APPEND_NETWORK_LOG,
  message
});

const clearNetworkLog = () => ({
  type: types.CLEAR_NETWORK_LOG
});

const controlDevice = (hostname, settings) => ({
  type: types.CONTROL_DEVICE,
  hostname,
  settings
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
  appendNetworkLog,
  clearNetworkLog,
  controlDevice,
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
  devices: [],
  networkLog: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.APPEND_NETWORK_LOG: {
      // keep most recent 20 entries
      const entry = {
        message: action.message,
        timestamp: Date.now()
      };
      const newLog = [entry, ...state.networkLog].slice(
        0,
        Math.min(20, state.networkLog.length + 1)
      );

      return {
        ...state,
        networkLog: newLog
      };
    }
    case types.CLEAR_NETWORK_LOG:
      return {
        ...state,
        networkLog: []
      };
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
