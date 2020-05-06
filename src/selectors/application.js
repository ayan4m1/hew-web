import { createSelector } from 'reselect';

export const getApplication = (state) => state.application;

export const getBrightness = createSelector(
  getApplication,
  (application) => application.brightness
);

export const getColor = createSelector(
  getApplication,
  (application) => application.color
);

export const getDevices = createSelector(
  getApplication,
  (application) => application.devices
);

export const getNetworkLog = createSelector(
  getApplication,
  (application) => application.networkLog
);

export const getPendingRequests = createSelector(
  getApplication,
  (application) => application.pendingRequests
);
