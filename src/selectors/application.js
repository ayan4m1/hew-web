import { createSelector } from 'reselect';

export const getApplication = (state) => state.application;

export const getBrightness = createSelector(
  getApplication,
  (application) => application.brightness
);

export const getStartColor = createSelector(
  getApplication,
  (application) => application.startColor
);

export const getEndColor = createSelector(
  getApplication,
  (application) => application.endColor
);

export const getDevices = createSelector(
  getApplication,
  (application) => application.devices
);

export const getNetworkLog = createSelector(
  getApplication,
  (application) => application.networkLog
);

export const getPattern = createSelector(
  getApplication,
  (application) => application.pattern
);

export const getPendingRequests = createSelector(
  getApplication,
  (application) => application.pendingRequests
);

export const getSpeed = createSelector(
  getApplication,
  (application) => application.speed
);
