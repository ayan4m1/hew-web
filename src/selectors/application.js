import { createSelector } from 'reselect';

export const getApplication = (state) => state.application;

export const getDevices = createSelector(
  getApplication,
  (application) => application.devices
);
