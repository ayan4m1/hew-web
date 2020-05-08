import axios from 'axios';
import { all, takeEvery, select, put, call } from 'redux-saga/effects';

import { types, actions } from 'reducers/application';
import { getDevices } from 'selectors/application';

function* controlDeviceWorker({ hostname, settings }) {
  try {
    const devices = yield select(getDevices);
    const device = devices.find((dev) => dev.hostname === hostname);

    if (!device) {
      throw new Error(`Invalid device ${hostname} specified`);
    }

    yield put(actions.appendNetworkLog(`Sending update to ${hostname}...`));
    yield put(actions.addPendingRequest(hostname));

    const response = yield call(axios, {
      url: `http://${hostname}/`,
      method: 'POST',
      data: {
        ...settings,
        p: device.passphrase
      }
    });

    yield put(actions.removePendingRequest(hostname));

    if (response.status !== 200) {
      throw new Error(response.body);
    }

    yield put(actions.appendNetworkLog(`${hostname} updated successfully!`));
  } catch (error) {
    yield put(
      actions.appendNetworkLog(`Error updating ${hostname}: ${error.message}`)
    );
    yield put(actions.removePendingRequest(hostname));
  }
}

function* controlDeviceWatcher() {
  yield takeEvery(types.CONTROL_DEVICE, controlDeviceWorker);
}

export const workers = { controlDeviceWorker };

export const watchers = { controlDeviceWatcher };

export default function* saga() {
  yield all(Object.values(watchers).map((watcher) => watcher()));
}
