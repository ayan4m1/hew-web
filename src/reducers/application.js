import { buildActions } from 'utils';

export const types = buildActions('application', [
  'ADD_DEVICE',
  'ADD_PENDING_REQUEST',
  'APPEND_NETWORK_LOG',
  'CLEAR_NETWORK_LOG',
  'CONTROL_DEVICE',
  'CONTROL_DEVICE_FAILURE',
  'CONTROL_DEVICE_SUCCESS',
  'EDIT_DEVICE',
  'REMOVE_DEVICE',
  'REMOVE_PENDING_REQUEST',
  'SET_BRIGHTNESS',
  'SET_COLOR',
  'SET_PATTERN',
  'SET_SPEED'
]);

const addDevice = (device) => ({
  type: types.ADD_DEVICE,
  device
});

const addPendingRequest = (hostname) => ({
  type: types.ADD_PENDING_REQUEST,
  hostname
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

const removePendingRequest = (hostname) => ({
  type: types.REMOVE_PENDING_REQUEST,
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

const setPattern = (pattern) => ({
  type: types.SET_PATTERN,
  pattern
});

const setSpeed = (speed) => ({
  type: types.SET_SPEED,
  speed
});

export const actions = {
  addDevice,
  addPendingRequest,
  appendNetworkLog,
  clearNetworkLog,
  controlDevice,
  editDevice,
  removeDevice,
  removePendingRequest,
  setBrightness,
  setColor,
  setPattern,
  setSpeed
};

export const patterns = {
  SOLID: 'Solid',
  MARQUEE: 'Marquee'
};

export const initialState = {
  brightness: 0,
  color: {
    r: 0,
    g: 0,
    b: 0
  },
  speed: 127,
  pattern: patterns.SOLID,
  devices: [],
  networkLog: [],
  pendingRequests: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_PENDING_REQUEST: {
      if (state.pendingRequests.includes(action.hostname)) {
        return state;
      } else {
        return {
          ...state,
          pendingRequests: [...state.pendingRequests, action.hostname]
        };
      }
    }
    case types.REMOVE_PENDING_REQUEST: {
      const newRequests = [...state.pendingRequests];
      const replaceIndex = newRequests.findIndex(
        (hostname) => hostname === action.hostname
      );

      if (replaceIndex === -1) {
        return state;
      }

      newRequests.splice(replaceIndex, 1);

      return {
        ...state,
        pendingRequests: newRequests
      };
    }
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
    case types.SET_PATTERN:
      return {
        ...state,
        pattern: action.pattern
      };
    case types.SET_SPEED:
      return {
        ...state,
        speed: action.speed
      };
    default:
      return state;
  }
};
