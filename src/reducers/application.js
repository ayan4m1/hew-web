import { buildActions } from 'utils';

export const types = buildActions('application', [
  'ADD_DEVICE',
  'EDIT_DEVICE',
  'REMOVE_DEVICE'
]);

const addDevice = (device) => ({
  type: types.ADD_DEVICE,
  device
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

export const actions = {
  addDevice,
  editDevice,
  removeDevice
};

export const initialState = {
  devices: []
};

export const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.ADD_DEVICE:
      return {
        ...state,
        devices: [...state.devices, action.device]
      };
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
    default:
      return state;
  }
};
