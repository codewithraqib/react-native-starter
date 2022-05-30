// @flow

import {App_Service} from 'src/services';

import {take, put, call, fork, all} from 'redux-saga/effects';

import {
  GET_FACEBOOK_DATA,
  fetchDataActionCreators,
  LOGIN_SCREEN,
  GET_PROFILE,
  GET_ALL_NEWS,
  GET_EXPLAINERS,
  GET_CATEGORIES,
  GET_SIDE_SCREEN_BANNERS,
  GET_NOTIFICATIONS,
} from './actions';
import AppData from 'src/services/appData';

const callback = (response, callback) => {
  if (callback)
    if (response.result === 'ok' && response.data) {
      callback({success: true, data: response.data});
    } else {
      callback({
        success: false,
        error: 'Login Failed try after sometime',
      });
    }
};

export function* asyncGetFacebookUserData({payload}) {
  const {facebookToken} = payload;

  // eslint-disable-next-line
  const url = `https://graph.facebook.com/v2.11/me?access_token=${facebookToken}&fields=id,name,email,picture{url}`;

  try {
    const response = yield call(App_Service, {url, method: 'GET'});

    if (response.result === 'ok') {
      yield put(
        fetchDataActionCreators.getFacebookUserDataSuccess(response.data),
      );
    }
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetFacebookUserData() {
  while (true) {
    const action = yield take(GET_FACEBOOK_DATA);
    yield* asyncGetFacebookUserData(action);
  }
}

export function* asyncLoginUser({payload}) {
  // eslint-disable-next-line
  const url = AppData.BASE_URL + 'api/v1/login';

  try {
    const response = yield call(App_Service, {
      url,
      method: 'POST',
      params: payload.data,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchLoginUser() {
  while (true) {
    const action = yield take(LOGIN_SCREEN);
    yield* asyncLoginUser(action);
  }
}

export function* asyncGetAllNews({payload}) {
  const url = `${AppData.INSHORTS_BASE_URL}/search`;

  try {
    const response = yield call(App_Service, {
      url,
      method: 'POST',
      params: payload.data,
      hasFile: true,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchGetAllNews() {
  while (true) {
    const action = yield take(GET_ALL_NEWS);
    yield* asyncGetAllNews(action);
  }
}

export function* asyncGetExplainers({payload}) {
  const url = `${AppData.INSHORTS_BASE_URL}/explainer`;

  try {
    const response = yield call(App_Service, {
      url,
      method: 'GET',
      hasFile: true,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchGetExplainers() {
  while (true) {
    const action = yield take(GET_EXPLAINERS);
    yield* asyncGetExplainers(action);
  }
}

export function* asyncGetCategories({payload}) {
  const url = `${AppData.INSHORTS_BASE_URL}/categories`;

  try {
    const response = yield call(App_Service, {
      url,
      method: 'GET',
      hasFile: true,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchGetCategories() {
  while (true) {
    const action = yield take(GET_CATEGORIES);
    yield* asyncGetCategories(action);
  }
}

export function* asyncGetSideScreenBanners({payload}) {
  const url = `${AppData.INSHORTS_BASE_URL}/banners`;

  try {
    const response = yield call(App_Service, {
      url,
      method: 'GET',
      hasFile: true,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchGetSideScreenBanners() {
  while (true) {
    const action = yield take(GET_SIDE_SCREEN_BANNERS);
    yield* asyncGetSideScreenBanners(action);
  }
}

export function* asyncGetNotifications({payload}) {
  const url = `${AppData.INSHORTS_BASE_URL}/notifications`;

  try {
    const response = yield call(App_Service, {
      url,
      method: 'GET',
      hasFile: true,
    });
    // yield put(fetchDataActionCreators.hideLoader());
    callback(response, payload.callback);
  } catch (e) {
    // yield put(fetchDataActionCreators.hideLoader());
    console.log(e);
  }
}

export function* watchGetNotifications() {
  while (true) {
    const action = yield take(GET_NOTIFICATIONS);
    yield* asyncGetNotifications(action);
  }
}

export default function*() {
  yield all([
    fork(watchGetFacebookUserData),
    fork(watchGetAllNews),
    fork(watchGetExplainers),
    fork(watchGetCategories),
    fork(watchGetSideScreenBanners),
    fork(watchGetNotifications),
  ]);
}
